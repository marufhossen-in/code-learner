import type { Lesson } from '../../../lib/types';

export const contractCourtLesson: Lesson = {
  slug: 'the-contract-court',
  tech: 'rest',
  title: {
    en: 'The Contract Court: OpenAPI 3.1, JSON Schema & Contract Testing',
    bn: 'চুক্তি-দরবার: OpenAPI 3.1, JSON Schema ও চুক্তিভিত্তিক টেস্টিং'
  },
  summary: {
    en: 'Master API specifications and contract-driven architecture across 10 structured topics. Compare Design-First vs Code-First methodologies. Master OpenAPI 3.1 document structure: paths, operations, components, and security schemes. Validate payloads using modern JSON Schema constraints. Generate interactive documentation and client SDKs. Set up Prism mock servers for parallel frontend development. Enforce automated contract validation in CI pipelines using Spectral, oasdiff, and Ajv in Express.',
    bn: '১০টি সুসংগঠিত পয়েন্টে API স্পেসিফিকেশন এবং চুক্তি-চালিত আর্কিটেকচার আয়ত্ত করুন। ডিজাইন-ফার্স্ট বনাম কোড-ফার্স্ট পদ্ধতির তুলনা শিখুন। OpenAPI 3.1 ডকুমেন্টের মূল কাঠামো জানুন: paths, operations, components এবং সিকিউরিটি স্কিম। আধুনিক JSON Schema দিয়ে ইনপুট ভ্যালিডেশন আয়ত্ত করুন। স্বয়ংক্রিয় ডকুমেন্টেশন ও ক্লায়েন্ট SDK জেনারেশন বুঝুন। ফ্রন্টএন্ডের জন্য Prism মক সার্ভার সেটআপ, Spectral লিন্টিং, oasdiff ব্রেকিং চেঞ্জ ডিটেকশন এবং এক্সপ্রেস Ajv ভ্যালিডেশন মিডলওয়্যার বাস্তবায়ন করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The API as a Binding Contract: Eliminating Misalignment', bn: '১. চুক্তিবদ্ধ দলিল হিসেবে API: পারস্পরিক ভুল বোঝাবুঝি দূরীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'When you design an API in distributed software engineering, your endpoints are not merely web addresses; they form a legally binding technical contract between provider and consumer teams. Without a formalized, machine-readable specification, documentation falls out of sync with code, leading to broken mobile integrations and deployment delays.',
        bn: 'ডিস্ট্রিবিউটেড সফটওয়্যার ইঞ্জিনিয়ারিংয়ে যখন আপনি একটি এপিআই ডিজাইন করেন, আপনার এন্ডপয়েন্টগুলো শুধু কিছু ওয়েব অ্যাড্রেস নয়; এগুলো প্রোভাইডার এবং কনজিউমার টিমের মধ্যকার একটি আনুষ্ঠানিক চুক্তি। মেশিন-পাঠযোগ্য স্পেসিফিকেশন না থাকলে কোড বদলালেও ডকুমেন্টেশন পুরনো থেকে যায়, যার ফলে মোবাইল অ্যাপ নষ্ট হয় এবং ডিপ্লয়মেন্ট আটকে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `THE CONTRACT LIFECYCLE:
1. Specify: Author machine-readable OpenAPI specification (The Single Source of Truth)
2. Mock: Run Prism mock servers so frontend teams build UIs in parallel
3. Implement: Backend engineers write route handlers validated against the schema
4. Enforce: Automated CI pipelines verify that deployed code never violates the spec`,
      caption: {
        en: 'The contract serves as the single source of truth across all engineering teams.',
        bn: 'এপিআই চুক্তিটি সব ইঞ্জিনিয়ারিং টিমের জন্য সত্যের একক উৎস হিসেবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Design-First vs Code-First: The Drift Dilemma', bn: '২. ডিজাইন-ফার্স্ট বনাম কোড-ফার্স্ট: ড্রিফট সমস্যা' } },
    {
      type: 'para',
      text: {
        en: 'The Code-First approach writes route handlers first and generates specifications from source annotations. While fast initially, it inevitably produces "documentation drift" where annotations lie about actual handler behavior. The Design-First methodology writes the OpenAPI specification first, treating it as the authoritative plan.',
        bn: 'কোড-ফার্স্ট পদ্ধতিতে আগে কোড লেখা হয় এবং পরে কমেন্ট বা অ্যানোটেশন থেকে ডকুমেন্ট তৈরি করা হয়। শুরুতে দ্রুত মনে হলেও এতে প্রায়ই ডকুমেন্টেশন ড্রিফট (drift) ঘটে, অর্থাৎ কোডের সাথে ডকুমেন্টের মিল থাকে না। আর ডিজাইন-ফার্স্ট পদ্ধতিতে আগে OpenAPI চুক্তি লেখা হয় যা নিশ্চিত করে সিস্টেমের প্রতিটি অংশ নিয়ম মেনে তৈরি হবে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+-----------------------+------------------------------------------+-----------------------------------+
| Methodology           | Workflow Steps                           | Primary Advantage / Risk          |
+-----------------------+------------------------------------------+-----------------------------------+
| Design-First          | Write Spec -> Mock -> Code Frontend/Back | Zero drift; parallel development  |
| Code-First            | Write Code -> Auto-generate Spec         | Fast prototype; high drift risk   |
+-----------------------+------------------------------------------+-----------------------------------+`,
      caption: {
        en: 'Design-First eliminates documentation drift and enables simultaneous frontend and backend coding.',
        bn: 'ডিজাইন-ফার্স্ট ডকুমেন্টেশনের অমিল দূর করে এবং একই সাথে ফ্রন্টএন্ড ও ব্যাকএন্ড তৈরির পথ খুলে দেয়।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'Contract-First OpenAPI Development Lifecycle', bn: 'কন্ট্রাক্ট-ফার্স্ট OpenAPI ডেভেলপমেন্ট জীবনচক্র' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Contract-First OpenAPI Lifecycle Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="200" height="200" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="115" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6">1. Author Contract</text><rect x="25" y="55" width="180" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="75" font-size="11" font-weight="bold">OpenAPI 3.1 Spec</text><text x="35" y="88" font-size="10">YAML / JSON Schema</text><rect x="25" y="105" width="180" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="125" font-size="11" font-weight="bold">Spectral Linting</text><text x="35" y="138" font-size="10">Automated style governance</text><rect x="25" y="155" width="180" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="175" font-size="11" font-weight="bold">Single Source of Truth</text><text x="35" y="192" font-size="10">Authoritative contract</text><rect x="250" y="15" width="200" height="200" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="350" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">2. Parallel Builds</text><rect x="260" y="55" width="180" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="75" font-size="11" font-weight="bold">Prism Virtual Mock</text><text x="270" y="88" font-size="10">Frontend builds immediately</text><rect x="260" y="105" width="180" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="125" font-size="11" font-weight="bold">Backend Handlers</text><text x="270" y="138" font-size="10">Validated by schema</text><rect x="260" y="155" width="180" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="175" font-size="11" font-weight="bold">Consumer Tests (Pact)</text><text x="270" y="192" font-size="10">Pre-deploy safety checks</text><rect x="485" y="15" width="200" height="200" rx="8" fill="none" stroke="#8b5cf6" stroke-width="1.5"/><text x="585" y="40" text-anchor="middle" font-weight="bold" fill="#8b5cf6">3. Delivery &amp; Docs</text><rect x="495" y="55" width="180" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="505" y="75" font-size="11" font-weight="bold">Interactive Docs</text><text x="505" y="88" font-size="10">Swagger UI &amp; Redocly</text><rect x="495" y="105" width="180" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="505" y="125" font-size="11" font-weight="bold">Client SDK Codegen</text><text x="505" y="138" font-size="10">TypeScript &amp; Kotlin SDKs</text><rect x="495" y="155" width="180" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="505" y="175" font-size="11" font-weight="bold">Zero Drift Deployment</text><text x="505" y="192" font-size="10">Guaranteed compatibility</text></g></svg>`,
      caption: {
        en: 'A contract-first workflow produces an authoritative spec enabling parallel frontend development, automated testing, and zero documentation drift.',
        bn: 'কন্ট্রাক্ট-ফার্স্ট পদ্ধতি একটি সুনির্দিষ্ট চুক্তির মাধ্যমে ফ্রন্টএন্ড ও ব্যাকএন্ডকে সমান্তরালে কাজ করতে সহায়তা করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Anatomy of an OpenAPI 3.1 Specification Document', bn: '৩. OpenAPI 3.1 স্পেসিফিকেশন ডকুমেন্টের মূল গঠন' } },
    {
      type: 'para',
      text: {
        en: 'OpenAPI Specification (OAS 3.1) is the global standard for REST contracts. It organizes definitions into standardized sections: openapi (version), info (metadata and license), servers (environment base URLs), paths (endpoints and operations), and components (reusable data schemas and security rules).',
        bn: 'OpenAPI Specification (OAS 3.1) হলো REST চুক্তির আন্তর্জাতিক মানদণ্ড। এর মূল অংশগুলো হলো: openapi (সংস্করণ), info (মেটাডাটা ও নাম), servers (সার্ভারের মূল লিঙ্ক), paths (এন্ডপয়েন্ট ও মেথডসমূহ) এবং components (পুনর্ব্যবহারযোগ্য ডেটা স্কিমা ও সিকিউরিটি নিয়ম)।'
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `openapi: 3.1.0
info:
  title: CodeShikhon Store API
  version: 1.0.0
servers:
  - url: https://api.codeshikhon.com/v1
paths:
  /products/{id}:
    get:
      summary: Fetch single product by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Product details retrieved
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Product'`,
      caption: {
        en: 'An OpenAPI document formally defines paths, path parameters, and expected response schemas.',
        bn: 'একটি OpenAPI ডকুমেন্ট আনুষ্ঠানিকভাবে পাথ, প্যারামিটার এবং রেসপন্স স্কিমা সংজ্ঞায়িত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. JSON Schema Validation Constraints in OpenAPI 3.1', bn: '৪. OpenAPI 3.1-এ JSON Schema ভ্যালিডেশন শর্তাবলি' } },
    {
      type: 'para',
      text: {
        en: 'OpenAPI 3.1 achieves 100% dialect compatibility with the latest JSON Schema standard. Engineers can define precise data constraints: type, required fields, numeric bounds (minimum, maximum), string patterns (regex, format: "email"), and strict enum sets.',
        bn: 'OpenAPI 3.1 আধুনিক JSON Schema স্ট্যান্ডার্ডের সাথে ১০০% সামঞ্জস্যপূর্ণ। ইঞ্জিনিয়াররা ডেটার পুঙ্খানুপুঙ্খ শর্ত বেঁধে দিতে পারেন: টাইপ, বাধ্যতামূলক ফিল্ড (required), সংখ্যার সীমা (minimum, maximum), স্ট্রিং ফরম্যাট (রেজেক্স বা format: "email") এবং নির্দিষ্ট enum তালিকা।'
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `components:
  schemas:
    Product:
      type: object
      required:
        - id
        - name
        - price
      properties:
        id:
          type: integer
          minimum: 1
        name:
          type: string
          minLength: 3
          maxLength: 100
        price:
          type: number
          minimum: 0.01
        status:
          type: string
          enum: [in_stock, out_of_stock, discontinued]`,
      caption: {
        en: 'JSON Schema defines strict boundaries on permissible request and response data types.',
        bn: 'JSON Schema ইনকামিং ও আউটগোয়িং ডেটার সঠিক টাইপ ও মান কঠোরভাবে নিয়ন্ত্রণ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Interactive Documentation: Swagger UI & Redoc Ecosystem', bn: '৫. ইন্টারঅ্যাকটিভ ডকুমেন্টেশন: Swagger UI ও Redoc ইকোসিস্টেম' } },
    {
      type: 'para',
      text: {
        en: 'Because OpenAPI documents are machine-readable, tools like Swagger UI and Redoc parse the YAML file and generate gorgeous, searchable, interactive web documentation. Developers can test endpoints directly in their browser ("Try it out") without writing a single line of client code.',
        bn: 'যেহেতু OpenAPI ডকুমেন্ট মেশিন-পাঠযোগ্য, তাই Swagger UI এবং Redoc-এর মতো টুলগুলো ওই YAML ফাইল পড়ে সুন্দর ও সার্চযোগ্য ওয়েব ডকুমেন্টেশন বানিয়ে দেয়। ক্লায়েন্ট ডেভেলপাররা কোনো কোড না লিখেই ব্রাউজারে "Try it out" চেপে লাইভ এপিআই পরীক্ষা করতে পারেন।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import yaml from "js-yaml";

const app = express();
// Load machine-readable spec:
const openApiDoc = yaml.load(fs.readFileSync("./openapi.yaml", "utf8"));

// Serve instant interactive documentation UI:
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDoc));

console.log("Interactive Swagger documentation live at /docs");
// Output: Interactive Swagger documentation live at /docs`,
      caption: {
        en: 'OpenAPI files power live, interactive browser sandboxes for third-party consumers.',
        bn: 'OpenAPI ফাইল বহিরাগত ডেভেলপারদের ব্যবহারের জন্য লাইভ ব্রাউজার ডকুমেন্টেশন তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Mock Servers: Unblocking Frontend Teams with Prism', bn: '৬. মক সার্ভার: Prism দিয়ে ফ্রন্টএন্ড টিমকে স্বাবলম্বী করা' } },
    {
      type: 'para',
      text: {
        en: 'In traditional workflows, frontend teams must wait weeks for backend engineers to finish database schemas and business logic. With Design-First OpenAPI, tools like Prism instantly spin up virtual HTTP mock servers that return realistic dummy data conforming to the spec, allowing frontend developers to build screens immediately.',
        bn: 'প্রচলিত পদ্ধতিতে ব্যাকএন্ডের কাজ শেষ না হওয়া পর্যন্ত ফ্রন্টএন্ড ডেভেলপারদের হাত গুটিয়ে বসে থাকতে হতো। ডিজাইন-ফার্স্ট পদ্ধতিতে Prism-এর মতো টুলের সাহায্যে OpenAPI ফাইল থেকেই মুহূর্তের মধ্যে একটি মক সার্ভার তৈরি করে ফেলা যায়, ফলে ফ্রন্টএন্ড টিম প্রথম দিন থেকেই আসল এপিআইর মতো ডেটা দিয়ে কাজ শুরু করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Run Prism instant mock server from command line:
npx @stoplight/prism-cli mock openapi.yaml -p 4010

# Prism responds to live HTTP requests with generated mock data:
# > GET http://localhost:4010/products/1
# < HTTP/1.1 200 OK
# < {"id": 1, "name": "Sample Product", "price": 49.99, "status": "in_stock"}`,
      caption: {
        en: 'Mock servers eliminate cross-team blockers by simulating production endpoints on day one.',
        bn: 'মক সার্ভার প্রথম দিনেই ভার্চুয়াল এন্ডপয়েন্ট তৈরি করে টিমগুলোর মধ্যকার কাজের বাধা দূর করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Automated Request & Response Validation: express-openapi-validator', bn: '৭. স্বয়ংক্রিয় ইনপুট ও আউটপুট ভ্যালিডেশন: express-openapi-validator' } },
    {
      type: 'para',
      text: {
        en: 'Instead of manually validating request bodies in every Express handler, middleware like express-openapi-validator automatically validates incoming requests against the OpenAPI contract. Requests with missing required properties are rejected immediately with 400 or 422 before touching business logic.',
        bn: 'প্রতিটি এক্সপ্রেস রাউটারে নিজে নিজে ভ্যালিডেশন কোড না লিখে, express-openapi-validator মিডলওয়্যার সরাসরি OpenAPI ফাইল দেখে ইনকামিং ডেটা যাচাই করে। কোনো ফিল্ড মিসিং বা ভুল টাইপ হলে এটি মূল কোডে যাওয়ার আগেই স্বয়ংক্রিয়ভাবে ৪০০ বা ৪২২ এরর ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
import * as OpenApiValidator from "express-openapi-validator";

const app = express();
app.use(express.json());

// Enforce OpenAPI contract mechanically:
app.use(
  OpenApiValidator.middleware({
    apiSpec: "./openapi.yaml",
    validateRequests: true,  // Automatically reject out-of-spec requests
    validateResponses: true // Warn if handlers return undeclared fields
  })
);

console.log("Automatic request/response contract enforcement activated");
// Output: Automatic request/response contract enforcement activated`,
      caption: {
        en: 'Middleware guarantees that handler inputs and outputs never drift from the OpenAPI contract.',
        bn: 'মিডলওয়্যার নিশ্চিত করে যে হ্যান্ডলারের ইনপুট ও আউটপুট সর্বদা চুক্তির সাথে মিলে চলবে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Automated Contract Linting: Spectral Rulesets in CI', bn: '৮. স্বয়ংক্রিয় চুক্তি লিন্টিং: CI পাইপলাইনে Spectral রুলসেট' } },
    {
      type: 'para',
      text: {
        en: 'Maintaining consistent design style across 50 microservices requires automated linting. Spectral (by Stoplight) inspects OpenAPI documents during CI builds, enforcing rules such as: all operations must have summaries, error responses must define RFC 9457 schemas, and URIs must use kebab-case.',
        bn: '৫০টি মাইক্রোসার্ভিস জুড়ে একই রকম সুন্দর এপিআই ডিজাইন বজায় রাখতে অটোমেটেড লিন্টিং প্রয়োজন। Spectral টুলটি গিট কমিটের সময় OpenAPI ফাইল পরীক্ষা করে নিশ্চিত করে যে: প্রতিটি মেথডের সামারি আছে কিনা, এররে RFC 9457 নিয়ম মানা হয়েছে কিনা এবং লিংকে kebab-case ব্যবহার করা হয়েছে কিনা।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Run Spectral linter against OpenAPI document:
npx @stoplight/spectral-cli lint openapi.yaml --ruleset spectral:oas

# CI output validates naming conventions and error schemas:
# openapi.yaml: 0 errors, 0 warnings. Contract is pristine!`,
      caption: {
        en: 'Spectral automates API style guide governance inside continuous integration pipelines.',
        bn: 'Spectral স্বয়ংক্রিয়ভাবে সিআই পাইপলাইনের ভেতরে এপিআই স্টাইল গাইড নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Consumer-Driven Contract Testing: The Pact Standard', bn: '৯. ভোক্তা-চালিত চুক্তি টেস্টিং: Pact স্ট্যান্ডার্ড' } },
    {
      type: 'para',
      text: {
        en: 'Consumer-Driven Contract (CDC) testing (exemplified by Pact) shifts contract verification to consumers. Client teams write test suites defining their exact expected interactions. The backend team executes these test expectations in their build pipeline, catching breaking changes before code ever reaches production.',
        bn: 'কনজিউমার-ড্রিভেন কন্ট্রাক্ট (CDC) টেস্টিং (যেমন Pact) যাচাইকরণের দায়িত্ব ক্লায়েন্টের হাতে দেয়। ক্লায়েন্ট টিম তাদের প্রয়োজনীয় ডেটার প্রত্যাশা কোডে লিখে টেস্ট ফাইল পাঠায়। ব্যাকএন্ড টিম ডিপ্লয় করার আগে ওই টেস্টগুলো চালিয়ে নিশ্চিত হয় যে কোনো ক্লায়েন্ট কোড ভাঙবে না।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `CONSUMER-DRIVEN CONTRACT WORKFLOW (Pact):
1. Mobile App Team defines expected contract: "When I GET /products/1, I need {id, price}"
2. Consumer generates a pact.json file
3. Provider (Backend API) runs pact.json against its live controllers during CI
4. If a backend engineer renames "price" to "cost", CI blocks the build immediately!`,
      caption: {
        en: 'Pact catches provider-breaking changes during CI builds before external deployment.',
        bn: 'Pact সিআই বিল্ড চলাকালীন ক্লায়েন্ট ভেঙে যাওয়ার ঝুঁকি সঙ্গে সঙ্গে শনাক্ত করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Ajv JSON Schema Route Validation in Express', bn: '১০. এক্সপ্রেস-এ Ajv JSON Schema রুট ভ্যালিডেশন তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Ajv is the industry-standard, high-performance JSON Schema validator for Node.js. It compiles schemas into optimized JavaScript code for sub-millisecond execution.',
        bn: 'Ajv হলো Node.js-এর জন্য সবচেয়ে দ্রুতগতির ও নির্ভরযোগ্য JSON Schema ভ্যালিডেটর। এটি স্কিমাকে অত্যন্ত দ্রুতগতির জাভাস্ক্রিপ্ট কোডে কম্পাইল করে ১ মিলিসেকেন্ডেরও কম সময়ে ডেটা যাচাই সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true });

const createProductSchema = {
  type: "object",
  required: ["name", "price"],
  properties: {
    name: { type: "string", minLength: 2 },
    price: { type: "number", minimum: 1 }
  },
  additionalProperties: false
};

const validate = ajv.compile(createProductSchema);

function validateProductMiddleware(req, res, next) {
  const valid = validate(req.body);
  if (!valid) {
    return res.status(422).json({
      type: "https://api.codeshikhon.com/errors/validation-failed",
      title: "Validation Failed",
      status: 422,
      detail: ajv.errorsText(validate.errors)
    });
  }
  next();
}

console.log("Ajv compiled validator ready for sub-millisecond route guards");
// Output: Ajv compiled validator ready for sub-millisecond route guards`,
      caption: {
        en: 'Ajv validates incoming payloads against JSON Schema specifications with maximum throughput.',
        bn: 'Ajv সর্বোচ্চ গতি ও দক্ষতার সাথে JSON Schema অনুযায়ী ইনপুট ডেটা যাচাই করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-cnt-ex1',
      kind: 'predict',
      topic: 'rest: openapi version current standard',
      question: {
        en: 'Which minor version of OpenAPI achieved 100% dialect compatibility with the latest JSON Schema specification (OpenAPI 3.___)?',
        bn: 'OpenAPI-র কোন সংস্করণটি আধুনিক JSON Schema স্পেসিফিকেশনের সাথে ১০০% সামঞ্জস্য অর্জন করেছে (OpenAPI 3.___)?'
      },
      code: `/* OpenAPI dialect compatibility version: */
/* openapi: 3._.0 */`,
      answer: '1',
      accept: ['1', '3.1', '3.1.0'],
      hint: {
        en: 'Version 3.1.',
        bn: 'ভার্সন ৩.১।'
      },
      explanation: {
        en: 'OpenAPI 3.1 aligned completely with JSON Schema 2020-12, uniting API definitions and schema validations.',
        bn: 'OpenAPI 3.1 সংস্করণটি আধুনিক JSON Schema-র সাথে পুরোপুরি একীভূত হয়েছে।'
      }
    },
    {
      id: 'rst-cnt-ex2',
      kind: 'mcq',
      topic: 'rest: design first primary advantage',
      question: {
        en: 'What is the primary architectural advantage of adopting the Design-First API methodology over Code-First?',
        bn: 'কোড-ফার্স্ট পদ্ধতির তুলনায় ডিজাইন-ফার্স্ট এপিআই পদ্ধতির মূল আর্কিটেকচারাল সুবিধা কোনটি?'
      },
      options: [
        { en: 'It eliminates documentation drift and allows frontend and backend teams to develop in parallel using mock servers', bn: 'এটি ডকুমেন্টেশনের অমিল দূর করে এবং মক সার্ভারের সাহায্যে ফ্রন্টএন্ড ও ব্যাকএন্ড টিমকে একসাথে কাজ করার সুযোগ দেয়' },
        { en: 'It makes JavaScript run without Node.js', bn: 'Node.js ছাড়াই জাভাস্ক্রিপ্ট চালায়' },
        { en: 'It removes the need for databases', bn: 'ডাটাবেসের প্রয়োজনীয়তা মুছে ফেলে' },
        { en: 'It makes APIs un-hackable', bn: 'এপিআইকে হ্যাক-প্রুফ বানায়' }
      ],
      answer: 0,
      hint: {
        en: 'Eliminates drift and unblocks parallel development.',
        bn: 'ড্রিফট দূর করে ও সমান্তরাল কাজের সুযোগ দেয়।'
      },
      explanation: {
        en: 'Design-First establishes the contract upfront, preventing documentation divergence and unblocking client teams via instant mock servers.',
        bn: 'ডিজাইন-ফার্স্ট শুরুতেই চুক্তি চূড়ান্ত করে ফেলে, ফলে টিমগুলোর কাজে কোনো দেরি হয় না।'
      }
    },
    {
      id: 'rst-cnt-ex3',
      kind: 'mcq',
      topic: 'rest: consumer driven contracts concept',
      question: {
        en: 'In Consumer-Driven Contract testing (such as Pact), who authors the contract expectations verified during provider CI builds?',
        bn: 'কনজিউমার-ড্রিভেন কন্ট্রাক্ট টেস্টিংয়ে (যেমন Pact) ব্যাকএন্ডের বিল্ডে যাচাইকৃত চুক্তির প্রত্যাশাগুলো কে লিখে দেয়?'
      },
      options: [
        { en: 'The client application teams who consume the API in production', bn: 'এপিআই ব্যবহারকারী ক্লায়েন্ট অ্যাপ্লিকেশন ডেভেলপার টিম' },
        { en: 'Cloud hosting providers (AWS, Azure)', bn: 'ক্লাউড হোস্টিং কোম্পানি' },
        { en: 'The database administrator', bn: 'ডাটাবেস অ্যাডমিনিস্ট্রেটর' },
        { en: 'Web browser manufacturers', bn: 'ওয়েব ব্রাউজার কোম্পানিগুলো' }
      ],
      answer: 0,
      hint: {
        en: 'The API consumer teams.',
        bn: 'এপিআই ব্যবহারকারী টিম।'
      },
      explanation: {
        en: 'Consumer-driven contracts originate from the actual client teams consuming the endpoints, ensuring providers do not break downstream dependencies.',
        bn: 'ভোক্তা বা ক্লায়েন্ট টিম নিজের চাহিদামতো টেস্ট লিখে দেয় যাতে ব্যাকএন্ড কখনো তাদের কোড ভাঙতে না পারে।'
      }
    }
  ],
  quiz: {
    id: 'rst-cnt-quiz',
    title: { en: 'OpenAPI, JSON Schema & Contract Testing Quiz', bn: 'OpenAPI, JSON Schema ও চুক্তি টেস্টিং কুইজ' },
    questions: [
      {
        id: 'rcq1',
        kind: 'mcq',
        topic: 'rest: Prism mock server role',
        question: {
          en: 'How does an HTTP mock server (like Prism) accelerate distributed product engineering?',
          bn: 'Prism-এর মতো একটি HTTP মক সার্ভার কীভাবে ডিস্ট্রিবিউটেড ইঞ্জিনিয়ারিংয়ের কাজকে দ্রুততর করে?'
        },
        options: [
          { en: 'It serves realistic dummy responses directly from an OpenAPI specification before any backend code is implemented', bn: 'কোনো ব্যাকএন্ড কোড লেখার আগেই OpenAPI ফাইল দেখে বাস্তবসম্মত ডামি রেসপন্স সরবরাহ করে' },
          { en: 'It compiles TypeScript to C++', bn: 'টাইপস্ক্রিপ্ট সি++ এ কম্পাইল করে' },
          { en: 'It automatically buys domain names', bn: 'ডোমেইন নেম কিনে ফেলে' },
          { en: 'It replaces database backups', bn: 'ডাটাবেস ব্যাকআপের কাজ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Serves realistic dummy responses from specs.',
          bn: 'স্পেক দেখে ডামি রেসপন্স পরিবেশন করে।'
        },
        explanation: {
          en: 'Prism provides instantaneous virtual endpoints matching the OpenAPI schema, allowing client developers to build and test UIs immediately.',
          bn: 'Prism শুরুতেই ভার্চুয়াল এপিআই চালু করে দেয় যাতে ফ্রন্টএন্ড ডেভেলপারদের ব্যাকএন্ডের জন্য অপেক্ষা করতে না হয়।'
        }
      },
      {
        id: 'rcq2',
        kind: 'mcq',
        topic: 'rest: Spectral linter purpose',
        question: {
          en: 'What primary role does Spectral fulfill in an enterprise API architecture?',
          bn: 'একটি বড় এন্টারপ্রাইজ এপিআই আর্কিটেকচারে Spectral টুলের প্রধান ভূমিকা কী?'
        },
        options: [
          { en: 'Automated linting of OpenAPI documents in CI to enforce organizational style guidelines and schema completeness', bn: 'সিআই পাইপলাইনে OpenAPI ফাইল যাচাই করে প্রতিষ্ঠানের নিজস্ব ডিজাইন নিয়ম ও সম্পূর্ণতা নিশ্চিত করা' },
          { en: 'Compressing image assets', bn: 'ছবি কম্প্রেস করা' },
          { en: 'Encrypting database passwords', bn: 'ডাটাবেস পাসওয়ার্ড এনক্রিপ্ট করা' },
          { en: 'Managing CSS layouts', bn: 'সিএসএস লেআউট নিয়ন্ত্রণ করা' }
        ],
        answer: 0,
        hint: {
          en: 'Automated OpenAPI document linting.',
          bn: 'স্বয়ংক্রিয় OpenAPI ফাইল লিন্টিং।'
        },
        explanation: {
          en: 'Spectral validates OpenAPI definitions against corporate governance rules, ensuring uniform naming, schema quality, and error contracts.',
          bn: 'Spectral স্বয়ংক্রিয়ভাবে এপিআই ডকুমেন্টের মান পরীক্ষা করে নিশ্চিত করে যে সব টিম একই নিয়ম মেনে চলছে।'
        }
      },
      {
        id: 'rcq3',
        kind: 'mcq',
        topic: 'rest: openapi 3.1 json schema alignment',
        question: {
          en: 'What major breakthrough did OpenAPI 3.1 introduce regarding JSON Schema compatibility compared to OpenAPI 3.0?',
          bn: 'OpenAPI 3.0-এর তুলনায় OpenAPI 3.1 সংস্করণটি JSON Schema ব্যবহারের ক্ষেত্রে কোন যুগান্তকারী পরিবর্তন এনেছে?'
        },
        options: [
          { en: '100% full dialect compatibility with the latest JSON Schema draft, unifying validation keywords like type arrays and patternProperties', bn: 'সর্বাধুনিক JSON Schema ড্রাফটের সাথে ১০০% সামঞ্জস্য অর্জন, যাতে টাইপ অ্যারে ও patternProperties এর মতো সব নিয়ম একীভূত হয়েছে' },
          { en: 'OpenAPI 3.1 completely abandoned JSON schemas for XML', bn: 'OpenAPI 3.1 জেসন বাদ দিয়ে পুরো এক্সএমএলে ফিরে গেছে' },
          { en: 'It restricted schemas to numbers only', bn: 'এটি স্কিমাকে কেবল সংখ্যায় সীমাবদ্ধ করেছে' },
          { en: 'It made schemas mandatory in git commit messages', bn: 'এটি গিট কমিট মেসেজে স্কিমা বাধ্যতামূলক করেছে' }
        ],
        answer: 0,
        hint: {
          en: 'Full 100% compatibility with the standard JSON Schema dialect.',
          bn: 'স্ট্যান্ডার্ড JSON Schema-র সাথে ১০০% সামঞ্জস্য।'
        },
        explanation: {
          en: 'OpenAPI 3.1 achieved 100% dialect alignment with standard JSON Schema, allowing engineers to reuse identical schema definitions across documentation and runtime validators.',
          bn: 'OpenAPI 3.1 আধুনিক JSON Schema-র সাথে ১০০% সামঞ্জস্যপূর্ণ হওয়ায় একই স্কিমা দিয়ে ডকুমেন্টেশন ও ভ্যালিডেশন দুটোই নিখুঁতভাবে চালানো যায়।'
        }
      },
      {
        id: 'rcq4',
        kind: 'mcq',
        topic: 'rest: consumer-driven contract testing benefit',
        question: {
          en: 'Why is Consumer-Driven Contract Testing (CDCT) especially vital in modern microservice architectures?',
          bn: 'আধুনিক মাইক্রোসার্ভিস আর্কিটেকচারে কনজিউমার-ড্রিভেন কন্ট্রাক্ট টেস্টিং (CDCT) কেন বিশেষভাবে গুরুত্বপূর্ণ?'
        },
        options: [
          { en: 'It verifies that provider changes never break downstream client expectations before code is merged to main, eliminating costly end-to-end staging environments', bn: 'এটি নিশ্চিত করে যে ব্যাকএন্ডের পরিবর্তন ক্লায়েন্টের প্রয়োজনীয়তাকে নষ্ট করছে না, ফলে ব্যয়বহুল এন্ড-টু-এন্ড টেস্টের ঝামেলা দূর হয়' },
          { en: 'It automatically writes backend database queries', bn: 'এটি ডাটাবেস কুয়েরি নিজে নিজে লেখে' },
          { en: 'It increases network connection bandwidth', bn: 'এটি নেটওয়ার্কের গতি বাড়ায়' },
          { en: 'It prevents all DDoS attacks', bn: 'এটি সব ধরনের ডিডস আক্রমণ আটকায়' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents breaking client expectations prior to merging.',
          bn: 'কোড মার্জ করার আগেই ক্লায়েন্টের প্রত্যাশা নষ্ট হওয়া রোধ করে।'
        },
        explanation: {
          en: 'Consumer-driven contracts give service providers immediate automated feedback on whether API changes will break any connected consumer services.',
          bn: 'কনজিউমার চুক্তি প্রদানকারীকে সাথে সাথে জানিয়ে দেয় যে কোনো পরিবর্তনের কারণে অন্য কোনো সংযুক্ত সার্ভিস ক্ষতিগ্রস্ত হচ্ছে কিনা।'
        }
      }
    ]
  }
};
