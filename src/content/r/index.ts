import type { Hub } from '../../lib/types';
import { VectorsAndTheFrameLesson } from './lessons/vectors-and-the-frame';
import { ListsAndTheFactorLesson } from './lessons/lists-and-the-factor';
import { VerbsAndThePipeLesson } from './lessons/verbs-and-the-pipe';
import { PlotsAndTheGeomLesson } from './lessons/plots-and-the-geom';
import { ModelsAndTheFitLesson } from './lessons/models-and-the-fit';
import { FuncsAndTheApplyLesson } from './lessons/funcs-and-the-apply';
import { TablesAndTheJoinLesson } from './lessons/tables-and-the-join';
import { TheRReleaseLesson } from './lessons/the-r-release';

export const rHub: Hub = {
  slug: 'r',
  name: 'R',
  icon: '📊',
  tagline: {
    en: 'Master statistical computing and data science in R: from vectorized data frames and tidyverse dplyr pipelines to ggplot2 grammar of graphics and regression modeling.',
    bn: 'R এ স্ট্যাটিস্টিক্যাল কম্পিউটিং ও ডাটা সায়েন্স আয়ত্ত করুন: ভেক্টরাইজড ডাটা ফ্রেম ও টাইডিভার্স dplyr পাইপলাইন থেকে ggplot2 গ্রাফিক্স এবং রিগ্রেশন মডেলিং পর্যন্ত।'
  },
  intro: {
    en: 'R is the world\'s leading programming language and environment for statistical computing, data visualization, bioinformatics, and scientific research. Built from the ground up for data manipulation, R features native vectorization, first-class statistical formulas, and the comprehensive tidyverse ecosystem. This hub guides you through 8 comprehensive lessons: atomic vectors and 1-based indexing, heterogeneous lists and categorical factors, data wrangling pipelines with dplyr verbs and the native pipe, publication-quality data visualization with ggplot2, statistical modeling and linear regression with lm(), functional programming with the apply family and purrr, high-speed joins with data.table, and reproducible research with Quarto and CRAN package development.',
    bn: 'R হলো স্ট্যাটিস্টিক্যাল কম্পিউটিং, ডাটা ভিজ্যুয়ালাইজেশন, বায়োইনফরমেটিক্স এবং বৈজ্ঞানিক গবেষণার জন্য বিশ্বখ্যাত প্রোগ্রামিং ভাষা। ডাটা বিশ্লেষণের জন্য বিশেষভাবে তৈরি R-এ রয়েছে নেটিভ ভেক্টরাইজেশন, ফার্স্ট-ক্লাস স্ট্যাটিস্টিক্যাল ফর্মুলা এবং শক্তিশালী টাইডিভার্স ইকোসিস্টেম। এই হাবটি আপনাকে ৮ টি ধারাবাহিক পাঠে দক্ষ করে তুলবে: অ্যাটমিক ভেক্টর ও ১-ভিত্তিক ইনডেক্সিং, হেটেরোজিনিয়াস লিস্ট ও ক্যাটাগরিক্যাল ফ্যাক্টর, dplyr ও নেটিভ পাইপ সহযোগে ডাটা প্রসেসিং, ggplot2 দিয়ে মানসম্মত ভিজ্যুয়ালাইজেশন, lm() দিয়ে স্ট্যাটিস্টিক্যাল মডেলিং ও লিনিয়ার রিগ্রেশন, apply ও purrr দিয়ে ফাংশনাল প্রোগ্রামিং, data.table দিয়ে উচ্চগতির টেবিল জয়েন এবং Quarto ও CRAN প্যাকেজ ডেভেলপমেন্ট।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — R Core Primitives: Vectors, Data Frames & Factors',
        bn: 'ধাপ ১ — R এর মূল ভিত্তি: ভেক্টর, ডাটা ফ্রেম এবং ফ্যাক্টর'
      },
      items: [
        {
          en: 'Atomic Vectors & 1-Based Indexing: Numeric, integer, logical, and character types with the recycling rule and data.frame structures.',
          bn: 'অ্যাটমিক ভেক্টর ও ১-ভিত্তিক ইনডেক্সিং: নিউমেরিক, ইন্টিজার, লজিক্যাল ও ক্যারেক্টার টাইপ সহ রিসাইক্লিং রুল ও data.frame গঠন।'
        },
        {
          en: 'Lists & Categorical Factors: Recursive lists, named dollar indexing, ordered factor levels, and contrast coding.',
          bn: 'লিস্ট ও ক্যাটাগরিক্যাল ফ্যাক্টর: রিকার্সিভ লিস্ট, ডলার ইনডেক্সিং, ফ্যাক্টরের স্তর এবং ক্যাটাগরি বিশ্লেষণ।'
        },
        {
          en: 'Data Wrangling with dplyr: Transforming tabular data with filter(), select(), mutate(), group_by(), and the pipe operator.',
          bn: 'dplyr দিয়ে ডাটা প্রসেসিং: filter(), select(), mutate(), group_by() এবং পাইপ অপারেটর দিয়ে টেবিল ডাটা রূপান্তর।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Visualization & Modeling: ggplot2 & Linear Regression',
        bn: 'ধাপ ২ — ভিজ্যুয়ালাইজেশন ও মডেলিং: ggplot2 এবং লিনিয়ার রিগ্রেশন'
      },
      items: [
        {
          en: 'Grammar of Graphics with ggplot2: Aesthetic mappings aes(), geometric layers (geom_point, geom_histogram), scales, and facets.',
          bn: 'ggplot2 দিয়ে গ্রাফিক্সের ব্যাকরণ: অ্যাসথেটিক ম্যাপিং aes(), জ্যামিতিক লেয়ার (geom_point, geom_histogram), স্কেল এবং ফ্যাসেট।'
        },
        {
          en: 'Statistical Modeling & Linear Regression: Model formulas (y ~ x), ordinary least squares with lm(), p-values, and residuals.',
          bn: 'স্ট্যাটিস্টিক্যাল মডেলিং ও লিনিয়ার রিগ্রেশন: মডেল ফর্মুলা (y ~ x), lm() দিয়ে ওএলএস রিগ্রেশন, p-ভ্যালু এবং রেসিডুয়াল।'
        },
        {
          en: 'Functional Programming with apply & purrr: Vectorized iterations with lapply(), sapply(), vapply(), and purrr::map() pipelines.',
          bn: 'apply ও purrr দিয়ে ফাংশনাল প্রোগ্রামিং: lapply(), sapply(), vapply() এবং purrr::map() দিয়ে ভেক্টরাইজড ইটারেশন।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Performance & Reproducibility: data.table & Package Engineering',
        bn: 'ধাপ ৩ — পারফরম্যান্স ও পুনরাবৃত্তি: data.table এবং প্যাকেজ ডেভেলপমেন্ট'
      },
      items: [
        {
          en: 'High-Performance Tables: Blazing-fast relational joins and memory-efficient aggregations using data.table DT[i, j, by].',
          bn: 'উচ্চগতির টেবিল বিশ্লেষণ: data.table DT[i, j, by] দিয়ে মেমরি-সাশ্রয়ী অ্যাগ্রিগেশন ও দ্রুত রিলেশনাল জয়েন।'
        },
        {
          en: 'Reproducible Research & Packages: Authoring scientific reports with Quarto, unit testing with testthat, and CRAN packaging.',
          bn: 'বিজ্ঞানসম্মত গবেষণা ও প্যাকেজ: Quarto দিয়ে রিপোর্ট তৈরি, testthat দিয়ে ইউনিট টেস্ট এবং CRAN প্যাকেজ প্রকাশ।'
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-r-customer-churn',
      title: {
        en: 'Customer Churn Analysis with dplyr and ggplot2',
        bn: 'dplyr এবং ggplot2 সহযোগে গ্রাহক ত্যাগের বিশ্লেষণ'
      },
      brief: {
        en: 'Analyze a dataset of 10000 telecom subscribers to identify high-risk churn indicators using tidyverse data pipelines and publication-grade facet plots.',
        bn: '১০,০০০ টেলিকম গ্রাহকের ডাটা বিশ্লেষণ করে টাইডিভার্স পাইপলাইন ও ফ্যাসেট প্লট ব্যবহার করে গ্রাহক ত্যাগের ঝুঁকি শনাক্ত করুন।'
      },
      tags: ['dplyr', 'ggplot2', 'EDA', 'Tidyverse']
    },
    {
      id: 'proj-r-econometric-model',
      title: {
        en: 'Multivariate Econometric Regression with lm()',
        bn: 'lm() দিয়ে মাল্টিভেরিয়েট ইকোনোমেট্রিক রিগ্রেশন'
      },
      brief: {
        en: 'Fit ordinary least squares models to predict regional housing valuations across 5 economic indicators, validating normality of residuals and multicollinearity.',
        bn: '৫ টি অর্থনৈতিক সূচকের ভিত্তিতে আঞ্চলিক বাড়ির দামের পূর্বাভাস দিতে OLS মডেল তৈরি করুন এবং রেসিডুয়াল যাচাই করুন।'
      },
      tags: ['Statistics', 'Regression', 'lm', 'Econometrics']
    },
    {
      id: 'proj-r-cran-package',
      title: {
        en: 'Production CRAN Package with roxygen2 and testthat',
        bn: 'roxygen2 এবং testthat সহ প্রোডাকশন CRAN প্যাকেজ'
      },
      brief: {
        en: 'Engineer an open-source R package implementing custom statistical distance metrics with full roxygen2 documentation, vignettes, and 100% test coverage.',
        bn: 'সম্পূর্ণ roxygen2 ডকুমেন্টেশন ও ১০০% টেস্ট কভারেজ সহ কাস্টম স্ট্যাটিস্টিক্যাল মেট্রিক্সের একটি ওপেন-সোর্স R প্যাকেজ তৈরি করুন।'
      },
      tags: ['CRAN', 'roxygen2', 'testthat', 'Open-Source']
    }
  ],
  bestPractices: [
    {
      id: 'bp-vectorization-first',
      title: {
        en: 'Embrace Native Vectorization Over Explicit For Loops',
        bn: 'ফর লুপের বদলে নেটিভ ভেক্টরাইজেশন ব্যবহার করুন'
      },
      description: {
        en: 'R is built in C and Fortran for SIMD array operations. Vectorized expressions like x + y run 50 to 100 times faster than manual iterative loops in R interpreter space.',
        bn: 'R এর কোর ইঞ্জিন সি ও ফরট্রানে তৈরি। x + y এর মতো ভেক্টরাইজড কোড সাধারণ লুপের চেয়ে ৫০ থেকে ১০০ গুণ দ্রুত গতিতে চলে।'
      }
    },
    {
      id: 'bp-1-based-indexing',
      title: {
        en: 'Respect 1-Based Indexing and Recycling Rules',
        bn: '১-ভিত্তিক ইনডেক্সিং এবং রিসাইক্লিং রুল সচেতনভাবে প্রয়োগ করুন'
      },
      description: {
        en: 'Unlike zero-based languages, R vectors start at index 1. Be vigilant with recycling rules where shorter vectors silently expand to match longer vectors.',
        bn: 'অন্যান্য ভাষার মতো ০ নয়, R এর ভেক্টর ১ নম্বর ইনডেক্স থেকে শুরু হয়। ছোট ভেক্টরের স্বয়ংক্রিয় রিসাইক্লিং রুল সম্পর্কে সতর্ক থাকুন।'
      }
    },
    {
      id: 'bp-tidyverse-readability',
      title: {
        en: 'Construct Clear Pipelines with Native Pipe (|>) and Tidy Data',
        bn: 'নেটিভ পাইপ (|>) ও টাইডি ডাটা দিয়ে পরিচ্ছন্ন কোড লিখুন'
      },
      description: {
        en: 'Chain data transformations using R 4.1 native pipe (|>) instead of deeply nested function calls, ensuring each data frame keeps 1 observation per row.',
        bn: 'জটিল নেস্টেড ফাংশনের বদলে R ৪.১ এর নেটিভ পাইপ (|>) ব্যবহার করুন এবং প্রতি সারিতে ১ টি পর্যবেক্ষণ বজায় রাখুন।'
      }
    },
    {
      id: 'bp-explicit-vapply',
      title: {
        en: 'Favor vapply() and purrr::map_*() for Type-Safe Returns',
        bn: 'টাইপ সুরক্ষার জন্য sapply এর বদলে vapply() বা purrr ব্যবহার করুন'
      },
      description: {
        en: 'Avoid sapply() in production code because its return type silently shifts between vector, list, and matrix based on input dimensions. Always use type-safe vapply() or purrr.',
        bn: 'প্রোডাকশনে sapply() পরিহার করুন কারণ ইনপুটের ওপর ভিত্তি করে এর রিটার্ন টাইপ বদলে যায়। টাইপ সুরক্ষার জন্য সর্বদা vapply() ব্যবহার করুন।'
      }
    }
  ],
  interview: [
    {
      q: {
        en: 'How does R vector recycling work and what risks does it introduce during arithmetic operations?',
        bn: 'R এ ভেক্টর রিসাইক্লিং কীভাবে কাজ করে এবং গাণিতিক হিসাবের সময় এটি কী ঝুঁকি তৈরি করে?'
      },
      a: {
        en: 'When executing arithmetic operations on 2 vectors of unequal length, R automatically recycles (repeats) elements of the shorter vector until its length matches the longer vector. For example, adding c(1, 2, 3, 4) and c(10, 20) yields c(11, 22, 13, 24). If the length of the longer vector is not an exact integer multiple of the shorter vector, R still performs the operation but raises a warning. In production pipelines, silent recycling can introduce catastrophic logic bugs if vector lengths diverge unexpectedly.',
        bn: 'ভিন্ন দৈর্ঘ্যের ২টি ভেক্টরের মাঝে গণনা করার সময় R ছোট ভেক্টরের উপাদানগুলোকে বারবার পুনরাবৃত্তি করে বড় ভেক্টরের সমান করে নেয়। যেমন c(1, 2, 3, 4) এবং c(10, 20) যোগ করলে c(11, 22, 13, 24) তৈরি হয়। বড় ভেক্টরের দৈর্ঘ্য ছোট ভেক্টরের গুণিতক না হলে R একটি সতর্কবার্তা দিলেও হিসাব চালিয়ে যায়। প্রোডাকশনে অপ্রত্যাশিতভাবে ভেক্টরের সাইজ অমিল হলে এটি মারাত্মক ভুল ফলাফল দিতে পারে।'
      }
    },
    {
      q: {
        en: 'What is the technical difference between indexing a list with single brackets [ ] versus double brackets [[ ]] in R?',
        bn: 'R এ সিঙ্গেল ব্র্যাকেট [ ] এবং ডাবল ব্র্যাকেট [[ ]] দিয়ে লিস্ট ইনডেক্সিংয়ের প্রযুক্তিগত পার্থক্য কী?'
      },
      a: {
        en: 'Single brackets [ ] always preserve the container type, returning a sub-list containing the selected elements. For example, my_list[1] returns a list of length 1 containing the first element. In contrast, double brackets [[ ]] or the dollar operator $ extract the naked underlying object contained at that position. If element 1 is a numeric vector, my_list[[1]] yields the raw numeric vector itself, stripping the outer list container.',
        bn: 'সিঙ্গেল ব্র্যাকেট [ ] সর্বদা মূল কন্টেইনারের ধরন বজায় রাখে এবং নির্বাচিত উপাদান নিয়ে একটি সাব-লিস্ট প্রদান করে। যেমন my_list[1] ১ দৈর্ঘ্যের একটি নতুন লিস্ট দেয়। অপরদিকে ডাবল ব্র্যাকেট [[ ]] বা ডলার $ চিহ্ন লিস্টের খোসা ছাড়িয়ে ভেতরের আসল অবজেক্টটিকে সরাসরি বের করে আনে। প্রথম উপাদানটি ভেক্টর হলে my_list[[1]] সরাসরি সেই ভেক্টরটি ফেরত দেয়।'
      }
    },
    {
      q: {
        en: 'Explain the core philosophy of Hadley Wickham Grammar of Graphics implemented in ggplot2.',
        bn: 'ggplot2-তে বাস্তবায়িত হ্যাডলি উইকহ্যামের গ্রাফিক্সের ব্যাকরণের (Grammar of Graphics) মূল দর্শন ব্যাখ্যা করুন।'
      },
      a: {
        en: 'The Grammar of Graphics deconstructs a statistical chart into independent, composable layers rather than treating plots as fixed templates. A ggplot visualization requires 3 essential components: the dataset, aesthetic mappings (aes) linking data variables to visual channels (x/y coordinates, color, shape, size), and geometric objects (geoms) defining graphical marks (points, bars, lines). Layers are combined using the plus operator (+), augmented by scales, coordinate systems, and facets.',
        bn: 'গ্রাফিক্সের ব্যাকরণ যেকোনো চার্টকে নির্দিষ্ট কোনো টেমপ্লেট হিসেবে না দেখে কয়েকটি স্বাধীন লেয়ারের সমন্বয় হিসেবে বিবেচনা করে। একটি ggplot তৈরিতে ৩ টি মৌলিক উপাদান লাগে: ডাটা সেট, অ্যাসথেটিক ম্যাপিং (aes) যা ভেরিয়েবলকে দৃশ্যমান বৈশিষ্ট্যে (স্থানাঙ্ক, রঙ, সাইজ) রূপান্তর করে এবং জ্যামিতিক অবজেক্ট (geoms) যা বাস্তব চিত্র (বিন্দু, বার, রেখা) আঁকে। প্লাস (+) অপারেটর দিয়ে এই লেয়ারগুলো যুক্ত করা হয়।'
      }
    },
    {
      q: {
        en: 'When should a data engineer choose data.table over dplyr for large-scale data manipulation in R?',
        bn: 'R এ বিশালাকার ডাটা প্রসেসিংয়ের জন্য কখন একজন ইঞ্জিনিয়ারের dplyr এর বদলে data.table বেছে নেওয়া উচিত?'
      },
      a: {
        en: 'While dplyr provides unmatched readability and expressive verbs for exploratory data analysis, data.table is optimized for extreme performance and memory efficiency on datasets containing tens of millions of rows (10GB+). data.table operates via the concise DT[i, j, by] syntax, performing fast binary searches using keys, modifying columns in place by reference (:=) without memory allocation, and executing parallelized multi-threaded joins via OpenMP.',
        bn: 'অন্বেষণমূলক ডাটা বিশ্লেষণের জন্য dplyr চমৎকার পাঠযোগ্যতা প্রদান করলেও, কোটি কোটি সারির বিশালাকার ডাটার (১০ গিগাবাইটের বেশি) ক্ষেত্রে data.table অতুলনীয় গতি ও মেমরি সাশ্রয় দেয়। data.table তার সংক্ষিপ্ত DT[i, j, by] সিনট্যাক্স দিয়ে মেমরি কপি না করেই রেফারেন্স (:=) দিয়ে মান পরিবর্তন করে এবং ওপেনএমপি দিয়ে মাল্টি-থ্রেডেড দ্রুত জয়েন সম্পন্ন করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Pharmaceutical giants like Pfizer and Moderna use R and Bioconductor to analyze clinical trial patient biomarkers, generating validated statistical reports submitted to FDA regulatory auditors.',
      bn: 'ফাইজার ও মডার্নার মতো ফার্মাসিউটিক্যাল প্রতিষ্ঠানগুলো ক্লিনিক্যাল ট্রায়ালের রোগীর বায়োমার্কার বিশ্লেষণে R ও বায়োকন্ডাক্টর ব্যবহার করে এবং এফডিএ নিয়ন্ত্রকদের কাছে বিজ্ঞানসম্মত রিপোর্ট জমা দেয়।'
    },
    {
      en: 'Central banks and economic ministries utilize R time-series modeling (ARIMA, GARCH) to forecast inflation rates, simulate interest rate adjustments, and monitor macroeconomic liquidity.',
      bn: 'কেন্দ্রীয় ব্যাংক ও অর্থনৈতিক মন্ত্রণালয়গুলো মুদ্রাস্ফীতির পূর্বাভাস, সুদের হার সমন্বয় এবং সামষ্টিক অর্থনীতির গতিবিধি পর্যবেক্ষণে R টাইম-সিরিজ মডেল ব্যবহার করে।'
    },
    {
      en: 'E-commerce platforms deploy data.table and Shiny dashboards in production to analyze clickstream telemetry from 50 million shopping sessions, detecting checkout drop-off patterns in real time.',
      bn: 'ই-কমার্স প্ল্যাটফর্মগুলো ৫ কোটি শপিং সেশনের ক্লিকস্ট্রিম ডাটা বিশ্লেষণ করতে প্রোডাকশনে data.table ও শাইনি ড্যাশবোর্ড ব্যবহার করে।'
    },
    {
      en: 'Agrigenomics laboratories process terabytes of whole-genome sequencing reads using R statistical genetics pipelines, identifying drought-resistant crop phenotypes with reproducible Quarto notebooks.',
      bn: 'কৃষি গবেষণা ল্যাবগুলো জিনোম সিকোয়েন্সিং ডাটা বিশ্লেষণ ও খরা-সহনশীল ফসলের জাত শনাক্তকরণে R স্ট্যাটিস্টিক্যাল জেনেটিক্স ও কোয়ার্টো নোটবুক ব্যবহার করে।'
    }
  ],
  lessons: [
    VectorsAndTheFrameLesson,
    ListsAndTheFactorLesson,
    VerbsAndThePipeLesson,
    PlotsAndTheGeomLesson,
    ModelsAndTheFitLesson,
    FuncsAndTheApplyLesson,
    TablesAndTheJoinLesson,
    TheRReleaseLesson
  ]
};
