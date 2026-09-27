import { ArticleTopic, ProjectItem, ExperienceItem, EducationItem, CertificationItem, CompetencyGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Rajneesh Prakash Hajela',
  initials: 'RH',
  phone: '9930666595',
  email: 'rajneeshhajela.net@gmail.com',
  title: 'AI & Digital Transformation Leader | Enterprise Architect',
  location: 'India',
  linkedinUrl: 'https://www.linkedin.com/in/rajneesh-hajela/',
  yearsOfExperience: '18+',
  summary: `Enterprise Architect and Consulting Leader with 18+ years of experience driving AI/ML adoption, digital transformation, and enterprise architecture across global organizations. Specialist in agentic AI orchestration, cloud-native platforms, and RFP-driven consulting engagements. Proven success in delivering structured transformation cycles, architecting scalable AI solutions, and aligning technology with measurable ROI.`,
  highlights: [
    'Architected end-to-end GenAI solutions across J2EE, .NET, and ERP landscapes.',
    'Delivered 40% cost reduction through agent-driven compliance workflows.',
    'Built multi-agent orchestration frameworks using LangChain, AutoGen, and Azure AI.',
    'Led RFP engagements, defining As Is/To Be processes and delivering consulting outcomes.'
  ]
};

export const ARTICLE_TOPICS: ArticleTopic[] = [
  {
    id: 'six-parameters',
    slideNumber: 1,
    title: 'Six Parameters for Structuring Technology Transformation with AI',
    subtitle: 'A pragmatic framework for enterprise AI modernization and business alignment',
    category: 'AI & Agentic Systems',
    linkedinUrl: 'https://www.linkedin.com/pulse/six-parameters-structuring-technology-transformation-ai-hajela-kciyf/',
    summary: 'A structured architectural methodology that breaks down AI transformation into six measurable, governable dimensions to ensure scalable enterprise deployment rather than isolated point solutions.',
    readTime: '6 min read',
    diagramType: 'six-parameters',
    tags: ['AI Strategy', 'Enterprise Architecture', 'Transformation', 'ROI', 'Governance'],
    keyParameters: [
      { num: '01', title: 'Business Capability Alignment', description: 'Mapping AI initiatives strictly to high-ROI business capabilities and As Is/To Be target states.' },
      { num: '02', title: 'Data & Context Foundation', description: 'Establishing enterprise context fabric, clean data pipelines, knowledge graphs, and RAG readiness.' },
      { num: '03', title: 'Agentic Orchestration & Autonomy', description: 'Designing multi-agent workflows with human-in-the-loop controls and tool integration.' },
      { num: '04', title: 'Cloud-Native & Hybrid Fabric', description: 'Ensuring portable deployment across AWS, Azure, GCP, and existing legacy core systems.' },
      { num: '05', title: 'Governance, Security & LLMOps', description: 'Enforcing RBAC, compliance guardrails, model lineage, cost tracking, and safety policies.' },
      { num: '06', title: 'Continuous Value & Change Adoption', description: 'Establishing feedback loops, operational telemetry, MTTR tracking, and organizational enablement.' }
    ],
    architecturePoints: [
      'Bridges executive strategy with operational AI delivery pipelines.',
      'Prevents vendor lock-in by enforcing modular agent and model gateways.',
      'Ensures compliance readiness across financial, insurance, and pharma domains.'
    ]
  },
  {
    id: 'neuro-san-studio',
    slideNumber: 2,
    title: 'AI Multi-Agent Accelerator: Neuro SAN Studio (AAOSA Adaptive)',
    subtitle: 'Adaptive Autonomous Multi-Agent Systems Architecture for Enterprise Workflows',
    category: 'AI & Agentic Systems',
    linkedinUrl: 'https://www.linkedin.com/pulse/ai-multi-agent-accelerator-neuro-san-studio-aaosa-adaptive-hajela-yyw8f/',
    summary: 'An architectural blueprint for multi-agent systems that autonomously collaborate, delegate tasks, execute tool calls, and adapt to context changes while maintaining auditability and governance.',
    readTime: '8 min read',
    diagramType: 'multi-agent',
    tags: ['Multi-Agent', 'AutoGen', 'LangChain', 'CrewAI', 'Orchestration'],
    keyParameters: [
      { num: '01', title: 'Agent Specialized Roles', description: 'Decomposing complex processes into planner, investigator, executor, and reviewer agents.' },
      { num: '02', title: 'Deterministic + Probabilistic Execution', description: 'Blending rules-based engines with LLM reasoning for zero-hallucination execution.' },
      { num: '03', title: 'Secure Tool & API Exchange', description: 'Standardized agent protocol (MCP / REST) with strict scope-limited credentials.' },
      { num: '04', title: 'Shared Context & Memory Store', description: 'Vector stores and key-value state engines for cross-agent memory retention.' },
      { num: '05', title: 'Human-in-the-Loop Safeguards', description: 'Configurable approval checkpoints for high-risk operations (e.g. wire payments, policy approvals).' },
      { num: '06', title: 'Telemetry & Trajectory Auditing', description: 'Full trace logging, latency tracking, token budget monitoring, and safety evaluation.' }
    ],
    architecturePoints: [
      'Applied successfully in Pharma SOP automation and Compliance verification.',
      'Accelerates agent onboarding through pre-built domain-specific agent templates.',
      'Reduces multi-step transaction completion time by over 60%.'
    ]
  },
  {
    id: 'aiops-observability',
    slideNumber: 3,
    title: 'AIOps & Observability in Modern Architecture',
    subtitle: 'Combining Telemetry, LLMs, and Automated Diagnostics for Self-Healing Platforms',
    category: 'AIOps & Observability',
    linkedinUrl: 'https://www.linkedin.com/pulse/aiops-observability-modern-architecture-rajneesh-hajela-qsa0f/',
    summary: 'Architecting end-to-end AIOps platforms that ingest logs, metrics, and traces from Datadog and CloudWatch, using agentic AI to automate SQL query optimization and incident diagnosis.',
    readTime: '7 min read',
    diagramType: 'aiops',
    tags: ['AIOps', 'Observability', 'Datadog', 'CloudWatch', 'MTTR Reduction'],
    keyParameters: [
      { num: '01', title: 'Unified Telemetry Ingestion', description: 'Consolidating metrics, logs, and distributed traces into a normalized real-time stream.' },
      { num: '02', title: 'Anomaly & Pattern Detection', description: 'Automated baseline statistical models detecting spikes, memory leaks, and deadlock signals.' },
      { num: '03', title: 'LLM-Driven Incident RCA', description: 'Context-aware agents correlating log stack traces with git commits and DB query plans.' },
      { num: '04', title: 'BlueBolt DB Query Optimizer', description: 'Automated identification of missing indexes, table scans, and sub-optimal SQL executions.' },
      { num: '05', title: 'Self-Healing Remediation', description: 'Automated execution of predefined runbooks (restart, auto-scale, failover) with oversight.' },
      { num: '06', title: 'Continuous Feedback Loops', description: 'Learning from past incidents to continuously tune threshold parameters and alerts.' }
    ],
    architecturePoints: [
      'Reduces diagnosis time from 2-3 hours down to ~10 minutes in enterprise DB systems.',
      'Drives >80% reduction in Mean Time To Resolution (MTTR) across multi-cloud environments.',
      'Connects Streamlit / custom UIs directly with operational data stores.'
    ]
  },
  {
    id: 'cloud-agnostic-strategy',
    slideNumber: 4,
    title: 'Cloud-Agnostic Strategy: Architectural Freedom & Resilience',
    subtitle: 'Designing Portable Microservices and AI Workflows Across AWS, Azure & GCP',
    category: 'Cloud Architecture',
    linkedinUrl: 'https://www.linkedin.com/pulse/cloud-agnostic-strategy-rajneesh-hajela-0ocvf/',
    summary: 'A blueprint for avoiding single-vendor cloud lock-in by using abstract interface layers, containerized workloads (Kubernetes), and standardized infrastructure as code.',
    readTime: '6 min read',
    diagramType: 'cloud-agnostic',
    tags: ['Cloud Strategy', 'Multi-Cloud', 'Kubernetes', 'Terraform', 'Portability'],
    keyParameters: [
      { num: '01', title: 'Abstract Service Adapters', description: 'Decoupling application code from vendor SDKs via unified repository and messaging adapters.' },
      { num: '02', title: 'Kubernetes Container Fabric', description: 'Standardizing container execution on AWS EKS, Azure AKS, and Google GKE.' },
      { num: '03', title: 'Declarative IaC (Terraform)', description: 'Immutable infrastructure definition for consistent multi-region provisioning.' },
      { num: '04', title: 'Cross-Cloud Identity & Secrets', description: 'Centralized OAuth / Identity federation using HashiCorp Vault or OIDC.' },
      { num: '05', title: 'Unified Data Replication', description: 'Event-driven database synchronization avoiding proprietary DB features.' },
      { num: '06', title: 'Cost & Performance Arbitrage', description: 'Dynamic workload placement based on regional pricing and GPU availability.' }
    ],
    architecturePoints: [
      'Enables rapid migration or failover between AWS and Azure.',
      'Supports hybrid cloud and on-premise deployments seamlessly.',
      'Protects long-term enterprise investments from cloud vendor price shifts.'
    ]
  },
  {
    id: 'building-scaling-ai-workflows',
    slideNumber: 5,
    title: 'Transform Business Processes Rapidly by Scaling AI Workflows',
    subtitle: 'End-to-End Process Automation with Agentic Workflows, N8N, & Azure AI',
    category: 'AI & Agentic Systems',
    linkedinUrl: 'https://www.linkedin.com/pulse/transform-business-processes-rapidly-building-scaling-rajneesh-hajela-pubef/',
    summary: 'How to rapidly replace manual back-office tasks with low-code/pro-code AI orchestration, connecting CRM (Salesforce), ERP, and compliance validation.',
    readTime: '7 min read',
    diagramType: 'ai-workflows',
    tags: ['AI Workflows', 'N8N', 'Process Modernization', 'Salesforce', 'Automation'],
    keyParameters: [
      { num: '01', title: 'Process Mining & As Is Audit', description: 'Identifying high-volume manual bottlenecks in insurance, finance, and supply chain.' },
      { num: '02', title: 'Modular Agent Construction', description: 'Building domain agents for document extraction, verification, and multi-quote comparison.' },
      { num: '03', title: 'Hybrid Low-Code Orchestration', description: 'Leveraging N8N and LangChain for rapid workflow wiring and visual monitoring.' },
      { num: '04', title: 'API & Legacy ERP Adapters', description: 'Connecting modern AI pipelines with legacy J2EE, .NET, and mainframe systems.' },
      { num: '05', title: 'Automated Document Intelligence', description: 'OCR + LLM extraction for invoices, policy applications, and KYC documents.' },
      { num: '06', title: 'Audit-Ready Process Tracking', description: 'Full execution logs pushed directly to Salesforce and enterprise data lakes.' }
    ],
    architecturePoints: [
      'Delivered 40% operating cost reduction in compliance and insurance workflows.',
      'Reduced insurance policy issuance cycles from days to minutes.',
      'Provided clear ROI visibility through embedded analytics dashboards.'
    ]
  },
  {
    id: 'azure-rbac-graph-api',
    slideNumber: 6,
    title: 'Azure AD B2C, RBAC, & Microsoft Graph API Authentication',
    subtitle: 'Enterprise Security Architecture for Fine-Grained Access & User Management',
    category: 'Security & Identity',
    linkedinUrl: 'https://www.linkedin.com/pulse/azure-ad-b2c-rbac-microsoft-graph-api-authentication-user-hajela-kuydf/',
    summary: 'Securing multi-tenant web applications and APIs with OAuth 2.0, OpenID Connect, Azure AD B2C, role-based access control (RBAC), and automated Graph API provisioning.',
    readTime: '6 min read',
    diagramType: 'azure-rbac',
    tags: ['Azure AD B2C', 'RBAC', 'OAuth2', 'Microsoft Graph', 'Security'],
    keyParameters: [
      { num: '01', title: 'Identity Federation', description: 'Single Sign-On (SSO) integration across corporate Azure AD, social providers, and B2C.' },
      { num: '02', title: 'Fine-Grained Claims & RBAC', description: 'Embedding custom user roles and permissions into JWT token payloads.' },
      { num: '03', title: 'API Gateway Policy Enforcement', description: 'Validating token signatures, scopes, and rate limits at the API perimeter.' },
      { num: '04', title: 'Microsoft Graph Automation', description: 'Automating user onboarding, group assignment, and license management via Graph API.' },
      { num: '05', title: 'Zero Trust Security Model', description: 'Continuous identity verification, device compliance checks, and risk-based MFA.' },
      { num: '06', title: 'Audit & Threat Monitoring', description: 'Streaming security logs into Azure Sentinel / SIEM for real-time anomaly detection.' }
    ],
    architecturePoints: [
      'Protects enterprise microservices with standardized token validation filters.',
      'Eliminates manual user management overhead via automated provisioning scripts.',
      'Ensures strict compliance with SOC2, GDPR, and ISO 27001 requirements.'
    ]
  },
  {
    id: 'cqrs-pattern',
    slideNumber: 7,
    title: 'CQRS (Command Query Responsibility Segregation)',
    subtitle: 'Decoupling Read & Write Operations for High-Throughput Cloud Applications',
    category: 'Microservices & Patterns',
    linkedinUrl: 'https://www.linkedin.com/pulse/cqrs-command-query-responsibility-segregation-rajneesh-hajela/',
    summary: 'Architecting high-scale enterprise applications by separating write models (commands) from read models (queries), optimizing throughput, scalability, and data consistency.',
    readTime: '6 min read',
    diagramType: 'cqrs',
    tags: ['CQRS', 'Microservices', 'Database Design', 'Scalability', 'Architecture'],
    keyParameters: [
      { num: '01', title: 'Command / Write Model', description: 'Optimized for business validation, transactional integrity, and state changes.' },
      { num: '02', title: 'Query / Read Model', description: 'Denormalized, indexed data stores tailored for ultra-fast query and UI views.' },
      { num: '03', title: 'Asynchronous Synchronization', description: 'Event bus propagating domain events from write store to read projections.' },
      { num: '04', title: 'Independent Scaling', description: 'Scaling read replicas and query APIs independently from write endpoints.' },
      { num: '05', title: 'Conflict & Consistency Management', description: 'Handling eventual consistency grace periods cleanly in user experience.' },
      { num: '06', title: 'Domain Event Auditing', description: 'Every state change produces an immutable audit record for history and analysis.' }
    ],
    architecturePoints: [
      'Powers enterprise e-commerce, banking, and high-volume transaction engines.',
      'Eliminates database lock contention on heavy query workloads.',
      'Complements Event Sourcing and Saga orchestrations seamlessly.'
    ]
  },
  {
    id: 'event-sourcing-saga',
    slideNumber: 8,
    title: 'Event Sourcing, Eventual Consistency, & Saga Pattern',
    subtitle: 'Managing Distributed Transactions in Cloud-Native Microservices',
    category: 'Microservices & Patterns',
    linkedinUrl: 'https://www.linkedin.com/pulse/event-sourcing-eventual-consistency-saga-rajneesh-hajela-ghzpf/',
    summary: 'Mastering distributed transaction orchestration across microservices without 2-phase locks, using Orchestrated/Choreographed Sagas and append-only event logs.',
    readTime: '8 min read',
    diagramType: 'event-sourcing-saga',
    tags: ['Event Sourcing', 'Saga Pattern', 'Distributed Systems', 'Kafka', 'Microservices'],
    keyParameters: [
      { num: '01', title: 'Immutable Event Store', description: 'Persisting all system state changes as a chronological, append-only sequence of events.' },
      { num: '02', title: 'Saga Orchestration', description: 'Central coordinator managing step execution and compensating actions on failure.' },
      { num: '03', title: 'Choreographed Events', description: 'Decentralized services listening to domain events and triggering localized actions.' },
      { num: '04', title: 'Compensating Transactions', description: 'Automatic undo operations reverting partial changes when a workflow fails downstream.' },
      { num: '05', title: 'State Reconstruction & Replay', description: 'Rebuilding system state at any point in time by replaying event logs.' },
      { num: '06', title: 'Idempotency & Deduplication', description: 'Ensuring event handlers process duplicate messages safely without side effects.' }
    ],
    architecturePoints: [
      'Eliminates distributed deadlocks in multi-service payment and order fulfillment.',
      'Provides 100% accurate financial audit trails and historical state inspection.',
      'Tested across high-volume Azure Service Bus and Kafka event pipelines.'
    ]
  },
  {
    id: 'cognitive-search-openai',
    slideNumber: 9,
    title: 'Integrating Cognitive Search & OpenAI: Enterprise RAG Game Changer',
    subtitle: 'Combining Hybrid Vector + Lexical Search with LLMs for Deep Knowledge Retrieval',
    category: 'AI & Agentic Systems',
    linkedinUrl: 'https://www.linkedin.com/pulse/integrating-cognitive-search-openai-game-changer-looking-hajela-ptcdf/',
    summary: 'Architecting enterprise Retrieval-Augmented Generation (RAG) by pairing Azure AI Search (hybrid BM25 + vector) with OpenAI / LLM models for hallucination-free document QA.',
    readTime: '7 min read',
    diagramType: 'cognitive-search',
    tags: ['Cognitive Search', 'Azure OpenAI', 'RAG', 'Vector DB', 'Enterprise Search'],
    keyParameters: [
      { num: '01', title: 'Chunking & Embedding Strategy', description: 'Optimal document chunking, semantic boundary preservation, and embedding generation.' },
      { num: '02', title: 'Hybrid Search & Re-ranking', description: 'Combining full-text BM25 search with dense vector similarity and cross-encoder re-ranking.' },
      { num: '03', title: 'Semantic Grounding & Citations', description: 'Injecting retrieved context with explicit document source references into LLM prompts.' },
      { num: '04', title: 'Security Filtering & ACLs', description: 'Enforcing document-level user security permissions during vector retrieval.' },
      { num: '05', title: 'Prompt Caching & Cost Reduction', description: 'Caching frequent query embeddings to minimize OpenAI API usage costs.' },
      { num: '06', title: 'Evaluation & Hallucination Checks', description: 'Automated scoring of answer relevance, faithfulness, and context precision.' }
    ],
    architecturePoints: [
      'Transformed internal enterprise search across millions of PDF policies and technical specs.',
      'Achieved >95% accurate answers grounded strictly in source enterprise documents.',
      'Significantly reduced customer support escalation rates.'
    ]
  },
  {
    id: 'microservices-eda',
    slideNumber: 10,
    title: 'Architecture Workbook: Microservices & EDA E-Commerce Use Cases',
    subtitle: 'Production Blueprint for Event-Driven Microservices in E-Commerce',
    category: 'Microservices & Patterns',
    linkedinUrl: 'https://www.linkedin.com/pulse/architecture-workbook-microservices-eda-e-commerce-use-hajela-np1uf/',
    summary: 'A comprehensive architecture workbook detailing API gateway design, domain-driven design (DDD) boundaries, Kafka event streams, and Azure Logic Apps integration.',
    readTime: '8 min read',
    diagramType: 'microservices-eda',
    tags: ['Microservices', 'Event-Driven', 'E-Commerce', 'DDD', 'Kafka'],
    keyParameters: [
      { num: '01', title: 'Bounded Contexts (DDD)', description: 'Isolating Order, Inventory, Payment, and Shipping domains into independent services.' },
      { num: '02', title: 'API Gateway & Routing', description: 'Central entry point handling SSL termination, rate limiting, and request transformation.' },
      { num: '03', title: 'Async Event Backbone', description: 'Publishing domain events to Kafka / Azure Service Bus for decoupled subscriber processing.' },
      { num: '04', title: 'Outbox Pattern', description: 'Guaranteeing atomicity between local database updates and message publishing.' },
      { num: '05', title: 'Circuit Breaker & Bulkheads', description: 'Preventing cascading failures when downstream microservices degrade.' },
      { num: '06', title: 'Distributed Tracing', description: 'Correlating cross-service requests using OpenTelemetry correlation IDs.' }
    ],
    architecturePoints: [
      'Serves as an operational guide for converting monolithic J2EE/.NET apps into microservices.',
      'Handles peak promotional loads without inventory locking conflicts.',
      'Supports auto-healing, elastic autoscaling, and zero-downtime deployment.'
    ]
  },
  {
    id: 'cloud-service-mapping',
    slideNumber: 11,
    title: 'Cloud Service Mapping: AWS vs Azure vs Google Cloud Platform',
    subtitle: 'A Comparative Architecture Guide for Multi-Cloud Engineering',
    category: 'Cloud Architecture',
    linkedinUrl: 'https://www.linkedin.com/pulse/cloud-service-mapping-aws-azure-google-platform-rajneesh-hajela/',
    summary: 'A side-by-side mapping matrix of core cloud services across AWS, Azure, and GCP covering Compute, AI/ML, Messaging, Databases, Security, and Serverless.',
    readTime: '6 min read',
    diagramType: 'cloud-mapping',
    tags: ['AWS', 'Azure', 'GCP', 'Cloud Mapping', 'Multi-Cloud'],
    keyParameters: [
      { num: '01', title: 'AI & GenAI Mapping', description: 'AWS Bedrock / SageMaker vs Azure AI Foundry / OpenAI vs GCP Vertex AI.' },
      { num: '02', title: 'Compute & Containers', description: 'AWS EKS / Lambda vs Azure AKS / Functions vs GCP GKE / Cloud Run.' },
      { num: '03', title: 'Messaging & Eventing', description: 'AWS SQS / SNS / EventBridge vs Azure Service Bus / Event Grid vs GCP Pub/Sub.' },
      { num: '04', title: 'Data & Lakehouse', description: 'AWS Redshift / DynamoDB vs Azure Synapse / Cosmos DB vs GCP BigQuery / Spanner.' },
      { num: '05', title: 'Identity & Governance', description: 'AWS IAM / Organizations vs Azure AD / Entra ID vs GCP IAM / Resource Manager.' },
      { num: '06', title: 'FinOps & Cost Management', description: 'Comparing reserved instance models, serverless pricing, and egress costs.' }
    ],
    architecturePoints: [
      'Invaluable reference for RFP responses and enterprise cloud modernization proposals.',
      'Accelerates cloud architects in selecting optimal services per use case.',
      'Eliminates cross-cloud nomenclature confusion for engineering teams.'
    ]
  },
  {
    id: 'resilience-patterns',
    slideNumber: 12,
    title: 'Resilience Patterns in Distributed / Cloud-Native .NET & Azure',
    subtitle: 'Building Fault-Tolerant Systems with Polly, Circuit Breakers, & Retry Logic',
    category: 'Microservices & Patterns',
    linkedinUrl: 'https://www.linkedin.com/pulse/resilience-patterns-distributedcloud-native-net-azure-rajneesh-hajela-qac5f/',
    summary: 'Designing mission-critical .NET microservices on Azure that survive network partitions, transient API outages, and database spikes without losing data.',
    readTime: '6 min read',
    diagramType: 'resilience-patterns',
    tags: ['Resilience', 'Polly', '.NET', 'Azure', 'Fault Tolerance'],
    keyParameters: [
      { num: '01', title: 'Exponential Backoff Retry', description: 'Retrying transient failures with jitter to avoid thundering herd problem.' },
      { num: '02', title: 'Circuit Breaker Pattern', description: 'Tripping circuit after error thresholds to give failing services recovery time.' },
      { num: '03', title: 'Bulkhead Isolation', description: 'Isolating resource pools (thread pools, connection limits) per downstream dependency.' },
      { num: '04', title: 'Fallback Strategies', description: 'Providing graceful degraded responses or cached fallbacks when APIs fail.' },
      { num: '05', title: 'Chaos Engineering Validation', description: 'Simulating latency and network drops to verify system resilience under stress.' },
      { num: '06', title: 'Telemetry & Alerting', description: 'Tracking circuit breaker state changes and retry counts in Application Insights.' }
    ],
    architecturePoints: [
      'Guarantees 99.99% availability for enterprise payment and order services.',
      'Protects upstream microservices from cascading failure overload.',
      'Built into standardized enterprise C# / .NET SDK boilerplates.'
    ]
  },
  {
    id: 'azure-function-scalability',
    slideNumber: 13,
    title: 'Azure Function Scalability, Security, & Resilience',
    subtitle: 'Serverless Architecture Best Practices for Enterprise Backend Operations',
    category: 'Cloud Architecture',
    linkedinUrl: 'https://www.linkedin.com/pulse/azure-function-scalability-security-resilience-rajneesh-hajela-00wzf/',
    summary: 'Optimizing serverless workloads on Azure Functions covering cold-start mitigation, Premium Plan scaling, Key Vault integration, and VNet isolation.',
    readTime: '6 min read',
    diagramType: 'azure-functions',
    tags: ['Azure Functions', 'Serverless', 'Security', 'VNet', 'Scalability'],
    keyParameters: [
      { num: '01', title: 'Cold-Start Optimization', description: 'Minimizing deployment footprint, leveraging warm instances, and pre-warmed plans.' },
      { num: '02', title: 'Virtual Network (VNet) Integration', description: 'Routing outbound function traffic through private endpoints into internal networks.' },
      { num: '03', title: 'Key Vault Secret References', description: 'Eliminating hardcoded connection strings via managed identity references.' },
      { num: '04', title: 'Concurrency & Host Tuning', description: 'Configuring host.json batch sizes to maximize throughput without overloading DB.' },
      { num: '05', title: 'Durable Functions Orchestration', description: 'Managing stateful long-running workflows with fan-out/fan-in parallel execution.' },
      { num: '06', title: 'Security & Token Validation', description: 'Securing HTTP triggers with Azure Entra ID token validation headers.' }
    ],
    architecturePoints: [
      'Powers asynchronous order processing, invoice parsing, and background ingestion.',
      'Ensures compliance with enterprise private network isolation standards.',
      'Achieves ultra-low operating cost via consumption-based auto-scaling.'
    ]
  },
  {
    id: 'azure-face-ai',
    slideNumber: 14,
    title: 'Azure AI Service Face Recognition: Age & Emotion Detection',
    subtitle: 'Computer Vision & Ethical AI Implementation for Identity Verification',
    category: 'AI & Agentic Systems',
    linkedinUrl: 'https://www.linkedin.com/pulse/azure-ai-service-face-recognition-detect-age-emotion-hajela-uvkaf/',
    summary: 'Implementing real-time face detection, liveness verification, age and emotion analytics using Azure Vision AI services with responsible AI guardrails.',
    readTime: '5 min read',
    diagramType: 'face-recognition',
    tags: ['Azure Vision AI', 'Face Recognition', 'Computer Vision', 'Ethical AI', 'Biometrics'],
    keyParameters: [
      { num: '01', title: 'Liveness Detection', description: 'Verifying physical presence to prevent photo or video spoofing attacks.' },
      { num: '02', title: 'Biometric Vector Matching', description: 'Extracting anonymized face embeddings for secure 1:N identity verification.' },
      { num: '03', title: 'Emotion & Demographic Insights', description: 'Analyzing facial keypoints for customer sentiment and demographic analytics.' },
      { num: '04', title: 'Privacy & Data Protection', description: 'Encrypting facial templates at rest and enforcing automatic image deletion TTL.' },
      { num: '05', title: 'Responsible AI Guardrails', description: 'Mitigating demographic bias through model confidence thresholds and review.' },
      { num: '06', title: 'Edge & Mobile SDK Integration', description: 'Connecting mobile app camera frames directly to Azure AI HTTP endpoints.' }
    ],
    architecturePoints: [
      'Applied in automated KYC / AML identity validation for banking and insurance.',
      'Ensures strict adherence to privacy regulations regarding biometric storage.',
      'Delivers sub-second verification latency.'
    ]
  }
];

export const COGNIZANT_PROJECTS: ProjectItem[] = [
  {
    id: 'insurance-ivr',
    title: 'Insurance IVR Call Deflection System',
    role: 'Lead Architect',
    company: 'Cognizant',
    scope: 'Designed agentic workflow for intent detection, policy lookup, and smart routing.',
    outcome: 'Reduced manual call handling, improved containment rate, and freed human advisors for high-value complex tasks.',
    impactMetrics: ['45%+ Call Deflection Rate', 'Sub-second Intent Recognition', 'Free Advisor Capacity'],
    techStack: ['Agentic AI', 'Intent Detection', 'Python', 'Azure AI', 'REST APIs'],
    category: 'Insurance & AI',
    liveUrl: 'https://studio.otera.ai/workspace/332/apps/1140/workflows/aEW9tRk46nHW8lUQ'
  },
  {
    id: 'policy-renewal',
    title: 'Insurance Policy Renewal Automation',
    role: 'Solution Architect',
    company: 'Cognizant',
    scope: 'Built agent-driven renewal flow with multi-insurer quote comparison and automated document generation.',
    outcome: 'Faster policy issuance, reduced manual underwriting effort, and integrated Salesforce-based tracking.',
    impactMetrics: ['80% Reduction in Cycle Time', 'Multi-Quote Engine', 'Salesforce Integration'],
    techStack: ['Multi-Agent Flow', 'Salesforce API', 'N8N', 'Python', 'DocuSign'],
    category: 'Insurance & AI',
    liveUrl: 'https://studio.otera.ai/workspace/332/apps/1140/workflows/3LSf4m9LDEPxOrM1'
  },
  {
    id: 'kyb-aml-compliance',
    title: 'KYB & AML Compliance Orchestration',
    role: 'AI Enterprise Architect',
    company: 'Cognizant',
    scope: 'Orchestrated multi-agent flows for Know Your Business (KYB) and Anti-Money Laundering (AML) checks.',
    outcome: 'Automated compliance workflows, reduced operational risk, and ensured strict regulatory alignment.',
    impactMetrics: ['40% Operating Cost Reduction', '100% Audit Lineage', 'Zero-Risk Verification'],
    techStack: ['LangGraph', 'CrewAI', 'Otera AI', 'N8N', 'RAG', 'Vector Search'],
    category: 'FinTech & Compliance',
    liveUrl: 'https://studio.otera.ai/workspace/332/apps/1140/workflows/utMUEuZNERHiQWUs'
  },
  {
    id: 'db-observability',
    title: 'DB Observability & AI Diagnostic Platform',
    role: 'Technical Architect',
    company: 'Cognizant',
    scope: 'Built agentic platform combining LLMs, deterministic rules, and a Streamlit UI for database health.',
    outcome: 'Automated monitoring, SQL query optimization, incident reporting, and 80%+ MTTR reduction.',
    impactMetrics: ['80%+ MTTR Reduction', 'Automated SQL Tuning', 'Real-Time Telemetry'],
    techStack: ['Streamlit', 'Python', 'LLMs', 'Datadog', 'CloudWatch', 'PostgreSQL'],
    category: 'AIOps & Infrastructure',
    liveUrl: 'https://github.com/oterademoacrisure/Observability_Demo'
  },
  {
    id: 'bluebolt-db-optimizer',
    title: 'BlueBolt DB Optimizer Platform',
    role: 'Consulting Lead',
    company: 'Cognizant',
    scope: 'Integrated Datadog + AWS CloudWatch for automated SQL diagnosis and index recommendations.',
    outcome: 'Reduced diagnosis time from 2–3 hours down to ~10 minutes per complex slow query incident.',
    impactMetrics: ['2-3 Hrs -> 10 Mins Diagnosis', 'Automated Index Advice', 'AWS CloudWatch + Datadog'],
    techStack: ['Datadog API', 'AWS CloudWatch', 'Python', 'SQL Parser', 'GenAI'],
    category: 'AIOps & Infrastructure'
  },
  {
    id: 'neuro-san-pharma',
    title: 'Neuro SAN Studio – Pharma SOP Automation',
    role: 'Enterprise AI Architect',
    company: 'Cognizant',
    scope: 'Automated pharma SOP workflows with secure agent message exchange and compliance checks.',
    outcome: 'Compliance-ready automation, improved auditability, and accelerated batch validation.',
    impactMetrics: ['Audit-Ready Workflow', 'Zero-Mistake Protocol', 'Multi-Agent Exchange'],
    techStack: ['Neuro SAN Studio', 'AutoGen', 'LangChain', 'Azure AI Foundry', 'Python'],
    category: 'Pharma & Compliance',
    liveUrl: 'https://github.com/cognizant-ai-lab/neuro-san-studio'
  },
  {
    id: 'call-center-auditing',
    title: 'Call Center Auditing Solution',
    role: 'Solution Designer',
    company: 'Cognizant',
    scope: 'Designed Camunda-based auditing flows for call center operations and quality control.',
    outcome: 'Transparent operational reporting, reduced manual oversight, and automated sampling.',
    impactMetrics: ['Transparent Audit Trail', 'Camunda Workflow', 'Automated QC Scoring'],
    techStack: ['Camunda BPM', 'Java', 'Spring Boot', '.NET Web API', 'SQL Server'],
    category: 'Process Automation'
  },
  {
    id: 'sdlc-ai-acceleration',
    title: 'AI-Accelerated SDLC Automation Platform',
    role: 'Enterprise AI Architect',
    company: 'Cognizant',
    scope: 'Architected a GenAI-assisted SDLC pipeline covering requirement analysis, automated code review, unit test generation, and CI/CD quality gates.',
    outcome: 'Shortened sprint cycle times, improved code quality consistency, and cut manual review effort across delivery teams.',
    impactMetrics: ['35% Faster Sprint Cycles', '60% Automated Code Review Coverage', 'CI/CD Quality Gates'],
    techStack: ['GitHub Copilot', 'Azure DevOps', 'Python', 'LLMs', 'SonarQube', 'GitHub Actions'],
    category: 'SDLC & DevOps'
  }
];

export const CAREER_HISTORY: ExperienceItem[] = [
  {
    id: 'cognizant',
    role: 'Enterprise Architect – GenAI Lead',
    company: 'Cognizant',
    period: 'Jan 2023 – Present',
    skills: ['TOGAF', 'Agentic AI', 'Generative AI', 'Python', '.NET', 'React', 'TensorFlow', 'Otera AI', 'N8N', 'RFPs', 'AIOps'],
    responsibilities: [
      'Lead Architect for Insurance IVR Call Deflection, Policy Renewal Automation, and KYB/AML Multi-Agent Compliance.',
      'Designed BlueBolt DB Optimizer & DB Observability Framework reducing MTTR by >80% and diagnosis from 3 hours to 10 minutes.',
      'Architected Neuro SAN Studio for Pharma SOP automation and Camunda-based Call Center Auditing.',
      'Pioneered RFP-driven consulting engagements, defining As Is / To Be architecture states for Fortune 500 enterprise clients.'
    ]
  },
  {
    id: 'capgemini',
    role: 'Enterprise Architect – AI/ML Transformation',
    company: 'Capgemini',
    period: 'Jan 2018 – Jan 2023',
    skills: ['AI/ML Strategy', 'Generative AI', 'Data Management', 'MLOps', 'AWS SageMaker', 'Azure AI', 'Ethics & Compliance'],
    responsibilities: [
      'Led and mentored teams of AI/ML engineers, fostering a high-performance delivery culture.',
      'Developed and implemented enterprise AI/ML strategies aligned with global business growth goals.',
      'Explored and implemented Generative AI techniques for product development, risk assessment, and process automation.',
      'Oversaw data management, preprocessing for large-scale enterprise datasets, and regulatory compliance.'
    ]
  },
  {
    id: 'hcl',
    role: 'Senior Technical Lead',
    company: 'HCL Infosystems Ltd.',
    period: 'Jan 2016 – Feb 2017',
    skills: ['.NET Web API', 'Swagger', 'Identity Server', 'SQL Server', 'Vendor Invoice Management'],
    responsibilities: [
      'Designed and developed Vendor Invoice Management system and procurement workflows.',
      'Built secure, scalable .NET Web APIs with Swagger documentation and Identity Server role validation.',
      'Conducted rigorous code reviews, mentored junior developers, and optimized SQL Server stored procedures.'
    ]
  },
  {
    id: 'accenture',
    role: 'Team Lead – Microservices & Cloud',
    company: 'Accenture Services Pvt Ltd',
    period: 'Jun 2010 – Dec 2015',
    skills: ['.NET Microservices', 'Azure API Management', 'Azure Logic Apps', 'Service Bus', 'Twilio', 'SendGrid'],
    responsibilities: [
      'Built .NET-based microservices architecture with multiple secure API endpoints.',
      'Implemented Azure API Management with custom policies, rate limiting, and OAuth identity access.',
      'Delivered end-to-end order processing scenarios using Azure Storage, Service Bus, Logic Apps, and Twilio.'
    ]
  },
  {
    id: 'techprocess',
    role: 'Senior Developer – Enterprise Applications',
    company: 'TechProcess Solutions Ltd.',
    period: 'Aug 2007 – Jun 2010',
    skills: ['MVC', 'Web API', 'Telerik Kendo Grid', 'SQL Server', 'Dependency Injection'],
    responsibilities: [
      'Designed and developed enterprise applications using MVC, Web API, and Repository patterns.',
      'Built interactive user interfaces with Telerik Kendo Grid and client-side scripting.',
      'Worked extensively with SQL Server stored procedures, views, triggers, and module design.'
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'ms-it',
    degree: 'Master of Science (Information Technology)',
    institution: 'University / Higher Institution',
    year: '2004',
    details: 'Postgraduate focus on software engineering, database management systems, and advanced computing.'
  },
  {
    id: 'bs-cs',
    degree: 'Bachelor of Science (Computer Science)',
    institution: 'University / College',
    year: '2002',
    details: 'Foundational degree in computer science principles, algorithms, data structures, and mathematics.'
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'togaf-2025',
    name: 'TOGAF Certified Enterprise Architect',
    issuer: 'The Open Group',
    year: '2025',
    badge: 'Enterprise Architecture'
  },
  {
    id: 'azure-architect',
    name: 'Azure Solution Architect',
    issuer: 'Microsoft',
    year: 'Certified',
    badge: 'Cloud Architecture'
  },
  {
    id: 'ai-context-eng',
    name: 'AI Context Engineering Specialist',
    issuer: 'AI Institute',
    year: 'Certified',
    badge: 'GenAI & RAG'
  },
  {
    id: 'ms-solution-arch',
    name: 'Microsoft Certified Solution Architect',
    issuer: 'Microsoft',
    year: 'Certified',
    badge: 'Solutions Architecture'
  }
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    title: 'Enterprise Architecture & Consulting',
    category: 'Strategy & Governance',
    iconName: 'Building2',
    items: [
      'TOGAF Certified Framework',
      'RFP Response & Consulting Leadership',
      'As Is / To Be Process Engineering',
      'Target Operating Model (TOM)',
      'Enterprise Roadmap & ROI Modeling',
      'Stakeholder Advisory & Presentations'
    ]
  },
  {
    title: 'Agentic & Generative AI',
    category: 'AI Orchestration',
    iconName: 'Bot',
    items: [
      'LangChain & LangGraph',
      'CrewAI & AutoGen Frameworks',
      'Retrieval-Augmented Generation (RAG)',
      'LLMOps & Prompt / Context Engineering',
      'MLflow, PyTorch & TensorFlow',
      'Otera AI, N8N & AWS SageMaker',
      'Azure AI Foundry & Bedrock'
    ]
  },
  {
    title: 'Cloud Platforms & Microservices',
    category: 'Cloud Engineering',
    iconName: 'Cloud',
    items: [
      'AWS (Bedrock, SageMaker, Lambda)',
      'Azure (AI Services, API Mgmt, Logic Apps)',
      'Microservices Architecture (.NET, Java, Python)',
      'Docker & Kubernetes (EKS / AKS)',
      'CI/CD Pipelines & Infrastructure as Code',
      'Datadog, Application Insights, CloudWatch'
    ]
  },
  {
    title: 'Governance, AIOps & FinOps',
    category: 'Operations & Controls',
    iconName: 'ShieldCheck',
    items: [
      'AIOps & Incident Diagnosis Platforms',
      'BlueBolt DB SQL Optimizer',
      'MLOps & Continuous Model Evaluation',
      'FinOps & AI Token Cost Management',
      'Compliance & Regulatory Workflows (KYB/AML)',
      'Identity & Security (Azure AD B2C, RBAC, Graph API)'
    ]
  }
];
