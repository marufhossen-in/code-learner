// Simulation of GraphQL Nullability and Error Bubbling

function resolveField(schema, fieldName, value, shouldFail = false) {
  const isNonNull = schema[fieldName]?.endsWith('!') ?? false;

  if (shouldFail || value === null || value === undefined) {
    if (isNonNull) {
      throw new Error(`Cannot return null for non-nullable field ${fieldName}`);
    }
    return null;
  }
  return value;
}

// Case 1: Nullable field fails (Error is absorbed locally)
function simulateNullableFailure() {
  const schema = {
    id: 'ID!',
    name: 'String!',
    avatarUrl: 'String' // Nullable field
  };

  const errors = [];
  const result = { id: 'usr_1', name: 'Kabir' };

  try {
    result.avatarUrl = resolveField(schema, 'avatarUrl', null, true);
  } catch (err) {
    errors.push({ field: 'avatarUrl', message: err.message });
  }

  return {
    data: result,
    errorsCount: errors.length,
    avatarValue: result.avatarUrl
  };
}

// Case 2: Non-nullable field fails (Error bubbles up and wipes parent)
function simulateNonNullFailure() {
  const schema = {
    id: 'ID!',
    name: 'String!', // Non-nullable field fails
    email: 'String!'
  };

  const errors = [];
  let userRecord = { id: 'usr_2', email: 'ayesha@test.com' };

  try {
    userRecord.name = resolveField(schema, 'name', null, true);
  } catch (err) {
    errors.push({ field: 'name', message: err.message });
    // Error bubbles to parent root: userRecord collapses to null!
    userRecord = null;
  }

  return {
    data: userRecord,
    errorsCount: errors.length
  };
}

const case1 = simulateNullableFailure();
const case2 = simulateNonNullFailure();

console.log('Case 1 (Nullable): user data preserved:', case1.data !== null);
console.log('Case 1 (Nullable): avatarUrl absorbed as null:', case1.avatarValue === null);
console.log('Case 1 (Nullable): errors count:', case1.errorsCount);

console.log('Case 2 (Non-nullable): user record collapsed to null:', case2.data === null);
console.log('Case 2 (Non-nullable): errors count:', case2.errorsCount);
