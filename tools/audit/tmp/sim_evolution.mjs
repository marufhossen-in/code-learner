// Lightweight Simulation of GraphQL Schema Evolution & Breaking Change Audit in Node.js

class SchemaAuditor {
  // Compares previous schema definitions with incoming changes
  auditEvolution(oldSchema, newSchema) {
    const breaking = [];
    const safe = [];

    // Check for removed types or fields
    for (const [typeName, oldType] of Object.entries(oldSchema)) {
      if (!newSchema[typeName]) {
        breaking.push(`Type '${typeName}' was removed`);
        continue;
      }

      const newType = newSchema[typeName];

      // Check fields
      for (const [fieldName, oldFieldDef] of Object.entries(oldType.fields)) {
        if (!newType.fields[fieldName]) {
          breaking.push(`Field '${typeName}.${fieldName}' was removed`);
        } else {
          const newFieldDef = newType.fields[fieldName];
          // Check type narrowing/breaking
          if (oldFieldDef.type !== newFieldDef.type) {
            breaking.push(
              `Field '${typeName}.${fieldName}' changed type from '${oldFieldDef.type}' to '${newFieldDef.type}'`
            );
          }
          if (newFieldDef.deprecated && !oldFieldDef.deprecated) {
            safe.push(`Field '${typeName}.${fieldName}' marked deprecated: "${newFieldDef.deprecated}"`);
          }
        }
      }

      // Check new fields in newSchema
      for (const [fieldName, newFieldDef] of Object.entries(newType.fields)) {
        if (!oldType.fields[fieldName]) {
          safe.push(`Field '${typeName}.${fieldName}' added as new additive field`);
        }
      }
    }

    return {
      breakingCount: breaking.length,
      safeCount: safe.length,
      breaking,
      safe
    };
  }
}

const auditor = new SchemaAuditor();

// Schema V1
const schemaV1 = {
  User: {
    fields: {
      id: { type: 'ID!' },
      name: { type: 'String' },
      email: { type: 'String!' }
    }
  }
};

// Schema V2: Evolved
// - 'name' is removed (breaking!)
// - 'email' type changed from 'String!' to 'Int' (breaking!)
// - 'fullName' added (safe additive!)
// - 'id' marked deprecated (safe!)
const schemaV2 = {
  User: {
    fields: {
      id: { type: 'ID!', deprecated: 'Migrating to global UUID' },
      fullName: { type: 'String' },
      email: { type: 'Int' }
    }
  }
};

const report = auditor.auditEvolution(schemaV1, schemaV2);

console.log('Total breaking changes detected:', report.breakingCount);
console.log('Total safe additive changes detected:', report.safeCount);
console.log('First breaking reason:', report.breaking[0]);
console.log('Second breaking reason:', report.breaking[1]);
console.log('First safe change:', report.safe[0]);
