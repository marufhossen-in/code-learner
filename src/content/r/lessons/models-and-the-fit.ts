import type { Lesson } from '../../../lib/types';

export const ModelsAndTheFitLesson: Lesson = {
  slug: 'models-and-the-fit',
  tech: 'r',
  title: {
    en: 'Statistical Modeling in R: Linear & Logistic Regression with lm() & glm()',
    bn: 'R এ স্ট্যাটিস্টিক্যাল মডেলিং: lm() ও glm() দিয়ে লিনিয়ার ও লজিস্টিক রিগ্রেশন'
  },
  summary: {
    en: 'Master statistical inference and regression in R: formula syntax (y ~ x1 + x2), Ordinary Least Squares with lm(), Generalized Linear Models with glm(), p-values, R-squared, and predictive scoring.',
    bn: 'R এ স্ট্যাটিস্টিক্যাল ইনফারেন্স ও রিগ্রেশনে দক্ষতা: ফর্মুলা সিনট্যাক্স (y ~ x1 + x2), lm() দিয়ে অর্ডিনারি লিস্ট স্কয়ারস, glm() দিয়ে জেনারেলাইজড লিনিয়ার মডেল, p-ভ্যালু, R-স্কয়ার্ড এবং প্রেডিক্টিভ স্কোরিং।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'formula-syntax',
      text: {
        en: '1. The R Formula Syntax: y ~ x1 + x2',
        bn: '১. R এর ফর্মুলা সিনট্যাক্স: y ~ x1 + x2'
      }
    },
    {
      type: 'para',
      text: {
        en: 'R\'s statistical supremacy stems from its compact, mathematically expressive formula syntax. In a formula, the tilde (~) separates the dependent response variable on the left from the independent predictor variables on the right.',
        bn: 'R এর স্ট্যাটিস্টিক্যাল শ্রেষ্ঠত্বের মূলে রয়েছে এর সহজ এবং গাণিতিকভাবে প্রকাশক্ষম ফর্মুলা সিনট্যাক্স। একটি ফর্মুলায় টিল্ডা (~) চিহ্নটি বাম পাশের নির্ভরশীল ফলাফল ভেরিয়েবলকে ডান পাশের স্বাধীন প্রেডিক্টর ভেরিয়েবল থেকে আলাদা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The formula interface supports powerful relational operators:',
        bn: 'ফর্মুলা ইন্টারফেস শক্তিশালী সম্পর্কযুক্ত অপারেটর সমর্থন করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Additive predictors: y ~ x1 + x2 estimates the additive effect of x1 and x2 independently.',
          bn: '১. যোজক প্রেডিক্টর: y ~ x1 + x2 স্বাধীনভাবে x1 এবং x2 এর যোগফল প্রভাব হিসাব করে।'
        },
        {
          en: '2. Interaction terms: y ~ x1 * x2 automatically expands to y ~ x1 + x2 + x1:x2, modeling the interaction effect.',
          bn: '২. ইন্টারঅ্যাকশন প্রভাব: y ~ x1 * x2 নিজে থেকেই y ~ x1 + x2 + x1:x2 তে রূপান্তরিত হয়ে মিথস্ক্রিয়া প্রভাব মডেল করে।'
        },
        {
          en: '3. Full column shortcut: y ~ . regresses y against all other columns present in the input data frame.',
          bn: '৩. সব কলামের শর্টকাট: y ~ . ডাটা ফ্রেমে থাকা বাকি সমস্ত কলামের সাপেক্ষে y কে রিগ্রেস করে।'
        },
        {
          en: '4. Identity evaluation: y ~ I(x^2) instructs R to calculate the mathematical square of x rather than interpreting caret as model interaction.',
          bn: '৪. গাণিতিক আইডেন্টিটি: y ~ I(x^2) নির্দেশ করে যেন চিহ্নের বিশেষ মডেল অর্থ বাদ দিয়ে x এর গাণিতিক বর্গ হিসাব করা হয়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'regression-models-diagram',
      title: {
        en: 'Linear (lm) vs Logistic (glm) Regression in R',
        bn: 'R এ লিনিয়ার (lm) বনাম লজিস্টিক (glm) রিগ্রেশন'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Statistical Modeling in R: lm() vs glm()</text>' +
          '<!-- Column 1: Linear Regression (lm) -->' +
          '<g transform="translate(40, 60)">' +
            '<rect width="330" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="165" y="26" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">1. LINEAR REGRESSION: lm()</text>' +
            '<rect x="15" y="45" width="300" height="150" rx="6" fill="#0f172a"/>' +
            '<!-- Linear plot -->' +
            '<line x1="35" y1="170" x2="295" y2="170" stroke="#475569" stroke-width="1.5"/>' +
            '<line x1="35" y1="170" x2="35" y2="60" stroke="#475569" stroke-width="1.5"/>' +
            '<line x1="45" y1="155" x2="285" y2="75" stroke="#38bdf8" stroke-width="2.5"/>' +
            '<circle cx="80" cy="140" r="4" fill="#facc15"/>' +
            '<circle cx="120" cy="135" r="4" fill="#facc15"/>' +
            '<circle cx="170" cy="110" r="4" fill="#facc15"/>' +
            '<circle cx="210" cy="105" r="4" fill="#facc15"/>' +
            '<circle cx="250" cy="80" r="4" fill="#facc15"/>' +
            '<text x="165" y="80" fill="#38bdf8" font-size="10" font-weight="bold">y = &#x3B2;0 + &#x3B2;1*x + &#x3B5;</text>' +
            '<rect x="15" y="210" width="300" height="105" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="232" fill="#cbd5e1" font-size="10">&#x2022; Target: Continuous numerical value</text>' +
            '<text x="25" y="252" fill="#cbd5e1" font-size="10">&#x2022; Method: Ordinary Least Squares (OLS)</text>' +
            '<text x="25" y="272" fill="#cbd5e1" font-size="10">&#x2022; Metric: R-squared (variance explained)</text>' +
            '<text x="25" y="292" fill="#38bdf8" font-size="10" font-weight="bold">&#x2022; Code: lm(sales ~ spend + ads, data = df)</text>' +
          '</g>' +
          '<!-- Column 2: Logistic Regression (glm) -->' +
          '<g transform="translate(430, 60)">' +
            '<rect width="330" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="165" y="26" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">2. LOGISTIC REGRESSION: glm()</text>' +
            '<rect x="15" y="45" width="300" height="150" rx="6" fill="#0f172a"/>' +
            '<!-- Sigmoid S-Curve plot -->' +
            '<line x1="35" y1="170" x2="295" y2="170" stroke="#475569" stroke-width="1.5"/>' +
            '<line x1="35" y1="170" x2="35" y2="60" stroke="#475569" stroke-width="1.5"/>' +
            '<path d="M 45 160 C 130 160, 150 75, 285 75" fill="none" stroke="#34d399" stroke-width="2.5"/>' +
            '<text x="25" y="75" fill="#94a3b8" font-size="9">1.0</text>' +
            '<text x="25" y="165" fill="#94a3b8" font-size="9">0.0</text>' +
            '<circle cx="60" cy="165" r="4" fill="#f87171"/>' +
            '<circle cx="90" cy="165" r="4" fill="#f87171"/>' +
            '<circle cx="230" cy="72" r="4" fill="#34d399"/>' +
            '<circle cx="270" cy="72" r="4" fill="#34d399"/>' +
            '<text x="165" y="115" fill="#34d399" font-size="10" font-weight="bold">p = 1 / (1 + e^-z)</text>' +
            '<rect x="15" y="210" width="300" height="105" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="232" fill="#cbd5e1" font-size="10">&#x2022; Target: Binary 0/1 probability</text>' +
            '<text x="25" y="252" fill="#cbd5e1" font-size="10">&#x2022; Link: logit (log-odds)</text>' +
            '<text x="25" y="272" fill="#cbd5e1" font-size="10">&#x2022; Metric: Deviance &amp; AIC</text>' +
            '<text x="25" y="292" fill="#34d399" font-size="10" font-weight="bold">&#x2022; Code: glm(admit ~ gre, family = binomial)</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'lm-and-glm',
      text: {
        en: '2. Fitting Linear & Generalized Linear Models',
        bn: '২. লিনিয়ার এবং জেনারেলাইজড লিনিয়ার মডেল ফিট করা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In R, fitting models follows a consistent idiom across thousands of algorithms:',
        bn: 'R এ হাজারো অ্যালগরিদমের জন্য মডেল ফিট করার নিয়ম একই ধারা অনুসরণ করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Ordinary Least Squares: fit <- lm(sales ~ spend, data = marketing). Computes coefficient estimates, t-statistics, and p-values via summary(fit).',
          bn: '১. অর্ডিনারি লিস্ট স্কয়ারস: fit <- lm(sales ~ spend, data = marketing)। summary(fit) এর মাধ্যমে সহগ, t-পরিসংখ্যান এবং p-ভ্যালু হিসাব করে।'
        },
        {
          en: '2. Logistic Regression: glm_fit <- glm(churn ~ tenure + monthly_fee, family = binomial(link = "logit"), data = telco). Models probability bounded in [0, 1].',
          bn: '২. লজিস্টিক রিগ্রেশন: glm_fit <- glm(churn ~ tenure + monthly_fee, family = binomial(link = "logit"), data = telco)। ০ থেকে ১ এর মধ্যে সম্ভাবনা মডেল করে।'
        },
        {
          en: '3. Prediction: predict(fit, newdata = test_df, interval = "confidence") predicts expected outcomes with uncertainty bounds.',
          bn: '৩. প্রেডিকশন: predict(fit, newdata = test_df, interval = "confidence") সম্ভাব্য ফলাফল ও তার অনিশ্চয়তা সীমা হিসাব করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '3. OLS Linear & Logistic Regression Engine in TypeScript',
        bn: '৩. TypeScript এ OLS লিনিয়ার ও লজিস্টিক রিগ্রেশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how R solves Ordinary Least Squares linear regression equations (computing slope, intercept, and R-squared) and scores probabilities using the logistic sigmoid function:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে R অর্ডিনারি লিস্ট স্কয়ারস লিনিয়ার রিগ্রেশন সমাধান করে (ঢাল, ইন্টারসেপ্ট ও R-স্কয়ার্ড হিসাব করে) এবং লজিস্টিক সিগময়েড ফাংশন দিয়ে সম্ভাবনা নির্ণয় করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of R lm() Ordinary Least Squares regression and glm() logistic probability scoring.',
        bn: 'R এর lm() অর্ডিনারি লিস্ট স্কয়ারস এবং glm() লজিস্টিক সম্ভাব্যতা স্কোরিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of R lm() Linear Regression and glm() Logistic Scoring

interface RegressionSample {
  x: number;
  y: number;
}

// 1. Linear Regression (lm) Engine
class RLinearModel {
  public slope: number = 0;
  public intercept: number = 0;
  public rSquared: number = 0;

  fit(data: RegressionSample[]): void {
    const n = data.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    let sumY2 = 0;

    for (const pt of data) {
      sumX += pt.x;
      sumY += pt.y;
      sumXY += pt.x * pt.y;
      sumX2 += pt.x * pt.x;
      sumY2 += pt.y * pt.y;
    }

    const meanY = sumY / n;

    // Ordinary Least Squares formulas
    this.slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    this.intercept = (sumY - this.slope * sumX) / n;

    // Calculate R-squared (Total vs Residual Sum of Squares)
    let ssTot = 0;
    let ssRes = 0;

    for (const pt of data) {
      const yPred = this.intercept + this.slope * pt.x;
      ssTot += Math.pow(pt.y - meanY, 2);
      ssRes += Math.pow(pt.y - yPred, 2);
    }

    this.rSquared = 1 - ssRes / ssTot;
  }

  predict(newX: number): number {
    return Number((this.intercept + this.slope * newX).toFixed(2));
  }
}

// 2. Logistic Regression (glm binomial logit) Scoring
class RLogisticScorer {
  // Sigmoid link function: 1 / (1 + exp(-z))
  static predictProbability(linearPredictorZ: number): number {
    const prob = 1 / (1 + Math.exp(-linearPredictorZ));
    return Number(prob.toFixed(3));
  }
}

// Demonstration
// 1. Fit linear model (e.g. ad spend vs sales revenue)
const trainingData: RegressionSample[] = [
  { x: 10, y: 25 },
  { x: 20, y: 48 },
  { x: 30, y: 72 },
  { x: 40, y: 95 },
  { x: 50, y: 120 }
];

const lm = new RLinearModel();
lm.fit(trainingData);

console.log('Estimated Intercept: ' + lm.intercept.toFixed(2)); // -> 1.00
console.log('Estimated Slope: ' + lm.slope.toFixed(2)); // -> 2.37
console.log('Multiple R-squared: ' + lm.rSquared.toFixed(3)); // -> 0.999

const prediction60 = lm.predict(60);
console.log('Predicted sales for spend 60: ' + prediction60); // -> 143.20

// 2. Logistic regression probability scoring
// z = beta0 + beta1 * greScore (e.g. -4.0 + 0.01 * 600 = +2.0)
const zValue = 2.0;
const admissionProb = RLogisticScorer.predictProbability(zValue);
console.log('Logistic admission probability: ' + admissionProb); // -> 0.881`
    }
  ],
  exercises: [
    {
      id: 'model-ex-1',
      kind: 'mcq',
      question: {
        en: 'In R formula syntax, what does the expression y ~ x1 * x2 specify?',
        bn: 'R ফর্মুলা সিনট্যাক্সে y ~ x1 * x2 এক্সপ্রেশনটি কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'It includes the main effects of x1 and x2 plus their interaction effect (x1 + x2 + x1:x2)',
          bn: 'এটি x1 এবং x2 এর প্রধান প্রভাব সহ তাদের মিথস্ক্রিয়া প্রভাব (x1 + x2 + x1:x2) অন্তর্ভুক্ত করে'
        },
        {
          en: 'It strictly multiplies values of x1 and x2 without any individual main effects',
          bn: 'এটি প্রধান প্রভাব বাদ দিয়ে কেবল x1 এবং x2 এর মানকে সরাসরি গুণ করে'
        },
        {
          en: 'It runs 2 independent regressions and averages their slopes',
          bn: 'এটি ২টি স্বাধীন রিগ্রেশন চালায় এবং তাদের ঢালের গড় করে'
        },
        {
          en: 'It throws a syntax error because asterisk is only for math',
          bn: 'এটি সিনট্যাক্স এরর দেয় কারণ অ্যাস্ট্যারিস্ক কেবল গণিতে ব্যবহারযোগ্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'The asterisk expands into main terms plus interaction.',
        bn: 'তারকা চিহ্নটি প্রধান পদ এবং তাদের পারস্পরিক মিথস্ক্রিয়া উভয়ই তৈরি করে।'
      },
      explanation: {
        en: 'In R modeling formulas, the * operator is shorthand for main effects and their interaction: x1 * x2 expands to x1 + x2 + x1:x2.',
        bn: 'R ফর্মুলায় * অপারেটর প্রধান প্রভাব এবং মিথস্ক্রিয়া উভয়কেই অন্তর্ভুক্ত করে: x1 * x2 প্রসারিত হয়ে x1 + x2 + x1:x2 হয়।'
      }
    },
    {
      id: 'model-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which argument must be supplied to glm() in R to perform logistic regression for binary classification?',
        bn: 'বাইনারি ক্লাসিফিকেশনের জন্য R এর glm() ফাংশনে কোন আর্গুমেন্টটি অবশ্যই দিতে হয়?'
      },
      options: [
        {
          en: 'family = binomial(link = "logit")',
          bn: 'family = binomial(link = "logit")'
        },
        {
          en: 'method = "logistic_tree"',
          bn: 'method = "logistic_tree"'
        },
        {
          en: 'family = gaussian(link = "identity")',
          bn: 'family = gaussian(link = "identity")'
        },
        {
          en: 'type = "binary_forest"',
          bn: 'type = "binary_forest"'
        }
      ],
      answer: 0,
      hint: {
        en: 'Binary classification belongs to the binomial distribution family.',
        bn: 'বাইনারি ক্লাসিফিকেশন বাইনমিয়াল ডিস্ট্রিবিউশন পরিবারের অন্তর্ভুক্ত।'
      },
      explanation: {
        en: 'Specifying family = binomial (which uses the logit link function by default) configures glm() for logistic regression.',
        bn: 'family = binomial উল্লেখ করলে glm() ফাংশনটি লজিস্টিক রিগ্রেশন মডেল চালানোর জন্য প্রস্তুত হয়।'
      }
    },
    {
      id: 'model-ex-3',
      kind: 'mcq',
      question: {
        en: 'What does an R-squared value of 0.95 indicate in an Ordinary Least Squares linear regression summary?',
        bn: 'একটি অর্ডিনারি লিস্ট স্কয়ারস লিনিয়ার রিগ্রেশন সামারিতে ০.৯৫ R-স্কয়ার্ড মান কী নির্দেশ করে?'
      },
      options: [
        {
          en: '95% of the total variance in the dependent variable is explained by the model predictors',
          bn: 'নির্ভরশীল ভেরিয়েবলের মোট বিচ্যুতির ৯৫% মডেলের প্রেডিক্টরগুলোর মাধ্যমে ব্যাখ্যা করা সম্ভব'
        },
        {
          en: 'The model has a 95% chance of failing on new data',
          bn: 'নতুন ডাটায় মডেলটি ব্যর্থ হওয়ার সম্ভাবনা ৯৫%'
        },
        {
          en: '95 out of 100 rows in the data frame were discarded',
          bn: 'ডাটা ফ্রেমের ১০০ টির মধ্যে ৯৫ টি সারি বাদ দেওয়া হয়েছে'
        },
        {
          en: 'The regression slope is exactly 0.95 degrees',
          bn: 'রিগ্রেশন ঢালটি ঠিক ০.৯৫ ডিগ্রি'
        }
      ],
      answer: 0,
      hint: {
        en: 'R-squared represents the proportion of variance explained.',
        bn: 'R-স্কয়ার্ড ব্যাখ্যা করা বিচ্যুতির অনুপাত নির্দেশ করে।'
      },
      explanation: {
        en: 'R-squared (coefficient of determination) measures the proportion of variance in the response variable explained by the linear model.',
        bn: 'R-স্কয়ার্ড নির্দেশ করে যে মডেলের প্রেডিক্টরগুলো নির্ভরশীল চলকের বিচ্যুতির কতটা অংশ ব্যাখ্যা করতে পেরেছে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-models-and-the-fit',
    title: {
      en: 'Statistical Modeling in R Quiz',
      bn: 'R এ স্ট্যাটিস্টিক্যাল মডেলিং কুইজ'
    },
    questions: [
      {
        id: 'model-q1',
        kind: 'mcq',
        question: {
          en: 'In R regression output summary(fit), what does a p-value less than 0.05 generally suggest?',
          bn: 'R রিগ্রেশন আউটপুট summary(fit) এ ০.০৫ এর কম p-ভ্যালু সাধারণত কী ইঙ্গিত করে?'
        },
        options: [
          {
            en: 'Statistically significant evidence against the null hypothesis that the coefficient is zero',
            bn: 'সহগটি শূন্য হওয়ার নাল হাইপোথিসিসের বিরুদ্ধে পরিসংখ্যানগতভাবে উল্লেখযোগ্য প্রমাণ'
          },
          {
            en: 'That 5% of the data points were corrupted during computation',
            bn: 'গণনার সময় ৫% ডাটা নষ্ট হয়ে গিয়েছিল'
          },
          {
            en: 'The model will execute 5 times slower on multi-core CPUs',
            bn: 'মাল্টি-কোর সিপিইউতে মডেলটি ৫ গুণ ধীরে চলবে'
          },
          {
            en: 'The linear regression model must be immediately discarded',
            bn: 'লিনিয়ার রিগ্রেশন মডেলটি সাথে সাথে বাতিল করা উচিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard alpha threshold in hypothesis testing is 0.05.',
          bn: 'হাইপোথিসিস টেস্টে মানসম্মত আলফা থ্রেশহোল্ড হলো ০.০৫।'
        },
        explanation: {
          en: 'A p-value < 0.05 indicates strong evidence against the null hypothesis (beta = 0), implying a statistically significant relationship between predictor and outcome.',
          bn: 'p-ভ্যালু ০.০৫ এর নিচে থাকা মানে প্রেডিক্টর এবং ফলাফলের মধ্যে সম্পর্কটি পরিসংখ্যানগতভাবে তাৎপর্যপূর্ণ।'
        }
      },
      {
        id: 'model-q2',
        kind: 'mcq',
        question: {
          en: 'How do you obtain predicted probabilities (rather than log-odds) from a fitted logistic glm model in R?',
          bn: 'R এ ফিট করা লজিস্টিক glm মডেল থেকে লগ-অডস এর বদলে সরাসরি সম্ভাব্যতা (probabilities) পেতে কোন কোড ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'predict(model, newdata, type = "response")',
            bn: 'predict(model, newdata, type = "response")'
          },
          {
            en: 'predict(model, newdata, type = "probability_raw")',
            bn: 'predict(model, newdata, type = "probability_raw")'
          },
          {
            en: 'model.score_probabilities()',
            bn: 'model.score_probabilities()'
          },
          {
            en: 'glm_evaluate(model, format = "percent")',
            bn: 'glm_evaluate(model, format = "percent")'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use type = "response" to invert the link function.',
          bn: 'লিঙ্ক ফাংশন উল্টে মান পেতে type = "response" ব্যবহার করুন।'
        },
        explanation: {
          en: 'By default, predict(glm_model) returns predictions on the linear predictor scale (link). Setting type = "response" transforms them to the probability scale [0, 1].',
          bn: 'type = "response" সেট করলে R লিঙ্ক স্কেল রূপান্তর করে ০ থেকে ১ এর মধ্যে সম্ভাব্যতার মান প্রদান করে।'
        }
      },
      {
        id: 'model-q3',
        kind: 'mcq',
        question: {
          en: 'What mathematical function must be applied to logistic regression coefficients to obtain Odds Ratios?',
          bn: 'লজিস্টিক রিগ্রেশনের সহগ বা কোফিশিয়েন্ট থেকে অডস রেশিও পেতে কোন গাণিতিক ফাংশন প্রয়োগ করতে হয়?'
        },
        options: [
          {
            en: 'exp(coef(model))',
            bn: 'exp(coef(model))'
          },
          {
            en: 'log(coef(model))',
            bn: 'log(coef(model))'
          },
          {
            en: 'sqrt(coef(model))',
            bn: 'sqrt(coef(model))'
          },
          {
            en: 'abs(coef(model))',
            bn: 'abs(coef(model))'
          }
        ],
        answer: 0,
        hint: {
          en: 'Coefficients are log-odds; the inverse of natural log is the exponential function.',
          bn: 'সহগগুলো থাকে লগ-অডসে; স্বাভাবিক লগের বিপরীত হলো এক্সপোনেনশিয়াল বা exp। '
        },
        explanation: {
          en: 'Since logistic regression models log-odds, exponentiating the coefficients via exp(coef(model)) yields the corresponding Odds Ratios.',
          bn: 'যেহেতু লজিস্টিক রিগ্রেশন লগ-অডস তৈরি করে, তাই exp(coef(model)) এর মাধ্যমে এক্সপোনেনশিয়াল নিলে অডস রেশিও পাওয়া যায়।'
        }
      },
      {
        id: 'model-q4',
        kind: 'mcq',
        question: {
          en: 'What base R diagnostic function plots the 4 standard regression validation plots (residuals vs fitted, Normal Q-Q, etc.)?',
          bn: '৪ টি মানসম্মত রিগ্রেশন যাচাইকরণ প্লট (রেসিডুয়াল বনাম ফিটেড, নরমাল Q-Q ইত্যাদি) আঁকার জন্য বেস R এর কোন ফাংশনটি ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'plot(fit)',
            bn: 'plot(fit)'
          },
          {
            en: 'validate(fit)',
            bn: 'validate(fit)'
          },
          {
            en: 'diagnose(fit)',
            bn: 'diagnose(fit)'
          },
          {
            en: 'check_residuals(fit)',
            bn: 'check_residuals(fit)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calling the generic plot() method directly on an lm object.',
          bn: 'সরাসরি একটি lm অবজেক্টের ওপর জেনেরিক plot() কল করা।'
        },
        explanation: {
          en: 'Calling plot(fit) on an lm object displays 4 diagnostic graphics: Residuals vs Fitted, Normal Q-Q, Scale-Location, and Residuals vs Leverage.',
          bn: 'একটি lm অবজেক্টে plot(fit) কল করলে R নিজে থেকেই ৪ টি প্রধান রিগ্রেশন ডায়াগনস্টিক গ্রাফ তৈরি করে।'
        }
      },
      {
        id: 'model-q5',
        kind: 'mcq',
        question: {
          en: 'Which family argument is used in glm() to model count data (e.g. number of website visits per hour)?',
          bn: 'কাউন্ট বা গণনাভিত্তিক ডাটা (যেমন প্রতি ঘণ্টায় ওয়েবসাইটের ভিজিটর সংখ্যা) মডেল করতে glm() এ কোন ফ্যামিলি আর্গুমেন্ট ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'family = poisson',
            bn: 'family = poisson'
          },
          {
            en: 'family = gaussian',
            bn: 'family = gaussian'
          },
          {
            en: 'family = binomial',
            bn: 'family = binomial'
          },
          {
            en: 'family = uniform',
            bn: 'family = uniform'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard distribution for modeling discrete event arrival counts.',
          bn: 'বিচ্ছিন্ন ঘটনার আগমনের সংখ্যা মডেল করার মানসম্মত ডিস্ট্রিবিউশন।'
        },
        explanation: {
          en: 'The Poisson distribution (family = poisson, using the log link function) is standard for modeling non-negative integer count data in R.',
          bn: 'R এ অ-ঋণাত্মক পূর্ণসংখ্যার গণনা বা কাউন্ট ডাটা মডেল করতে family = poisson ব্যবহৃত হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'funcs-and-the-apply',
    title: {
      en: 'Functional Programming in R: The apply Family, purrr & Closures',
      bn: 'R এ ফাংশনাল প্রোগ্রামিং: apply ফ্যামিলি, purrr ও ক্লোজার্স'
    }
  }
};
