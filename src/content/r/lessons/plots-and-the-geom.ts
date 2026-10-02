import type { Lesson } from '../../../lib/types';

export const PlotsAndTheGeomLesson: Lesson = {
  slug: 'plots-and-the-geom',
  tech: 'r',
  title: {
    en: 'Grammar of Graphics with ggplot2: Geoms, Aesthetics & Facets',
    bn: 'ggplot2 এর সাথে গ্রামার অব গ্রাফিক্স: জিওম, অ্যাসথেটিক্স ও ফেসেটস'
  },
  summary: {
    en: 'Master layered data visualization with ggplot2: aesthetic mappings (aes), geometric representations (geom_point, geom_line, geom_boxplot), coordinate scales, and multi-panel facet grids.',
    bn: 'ggplot2 দিয়ে লেয়ার্ড ডাটা ভিজ্যুয়ালাইজেশনে দক্ষতা: অ্যাসথেটিক ম্যাপিং (aes), জ্যামিতিক রূপ (geom_point, geom_line, geom_boxplot), কোঅর্ডিনেট স্কেল এবং মাল্টি-প্যানেল ফেসেট গ্রিড।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'grammar-of-graphics',
      text: {
        en: '1. The Layered Philosophy of ggplot2',
        bn: '১. ggplot2 এর লেয়ার্ড আর্কিটেকচার দর্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike traditional chart libraries where you choose a rigid chart type (such as a pie chart or bar chart), ggplot2 implements Leland Wilkinson\'s Grammar of Graphics. Visualization is treated as a layered stack composed of data, aesthetic mappings, geometric shapes, coordinate systems, and facets.',
        bn: 'প্রথাগত চার্ট লাইব্রেরির মতো এখানে নির্দিষ্ট চার্ট টাইপ বেছে নিতে হয় না; বরং ggplot2 লিল্যান্ড উইলকিনসনের "গ্রামার অব গ্রাফিক্স" নিয়ম অনুসরণ করে। এখানে ভিজ্যুয়ালাইজেশনকে ডাটা, অ্যাসথেটিক ম্যাপিং, জ্যামিতিক রূপ, কোঅর্ডিনেট সিস্টেম এবং ফেসেটের একটি স্তরভিত্তিক কাঠামো হিসেবে তৈরি করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every ggplot2 graphic starts with the base ggplot() call specifying the dataset, followed by geometric layers added using the + operator. For example: ggplot(data = iris, aes(x = Sepal.Length, y = Petal.Length)) + geom_point().',
        bn: 'প্রতিটি ggplot2 গ্রাফিক শুরু হয় মূল ggplot() কল দিয়ে যেখানে ডাটা সেট নির্দিষ্ট করা হয়, এরপর + অপারেটর ব্যবহার করে এক বা একাধিক জ্যামিতিক লেয়ার যোগ করা হয়। যেমন: ggplot(data = iris, aes(x = Sepal.Length, y = Petal.Length)) + geom_point()।'
      }
    },
    {
      type: 'visual',
      id: 'ggplot-layers-diagram',
      title: {
        en: 'The Grammar of Graphics Layered Pyramid',
        bn: 'গ্রামার অব গ্রাফিক্সের লেয়ার্ড পিরামিড'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">The 7 Layers of ggplot2 Grammar of Graphics</text>' +
          '<!-- Left Stack: The 7 Layers -->' +
          '<g transform="translate(60, 55)">' +
            '<!-- Layer 7: Theme -->' +
            '<rect x="140" y="0" width="200" height="34" rx="4" fill="#a855f7" stroke="#c084fc" stroke-width="1.5"/>' +
            '<text x="240" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">7. Theme (Fonts, Colors, Grid)</text>' +
            '<!-- Layer 6: Facets -->' +
            '<rect x="115" y="42" width="250" height="34" rx="4" fill="#6366f1" stroke="#818cf8" stroke-width="1.5"/>' +
            '<text x="240" y="64" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">6. Facets (facet_wrap, small multiples)</text>' +
            '<!-- Layer 5: Coordinates -->' +
            '<rect x="90" y="84" width="300" height="34" rx="4" fill="#3b82f6" stroke="#60a5fa" stroke-width="1.5"/>' +
            '<text x="240" y="106" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5. Coordinates (coord_cartesian, polar)</text>' +
            '<!-- Layer 4: Statistics -->' +
            '<rect x="65" y="126" width="350" height="34" rx="4" fill="#0ea5e9" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<text x="240" y="148" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4. Statistics (stat_smooth, binning, quantiles)</text>' +
            '<!-- Layer 3: Geometries -->' +
            '<rect x="40" y="168" width="400" height="34" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>' +
            '<text x="240" y="190" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. Geometries (geom_point, geom_line, geom_bar)</text>' +
            '<!-- Layer 2: Aesthetics -->' +
            '<rect x="20" y="210" width="440" height="34" rx="4" fill="#f59e0b" stroke="#fbbf24" stroke-width="1.5"/>' +
            '<text x="240" y="232" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. Aesthetics: aes(x, y, color, size, shape)</text>' +
            '<!-- Layer 1: Data -->' +
            '<rect x="0" y="252" width="480" height="38" rx="4" fill="#ef4444" stroke="#f87171" stroke-width="1.5"/>' +
            '<text x="240" y="276" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. Data (Tidy Data Frame / Tibble)</text>' +
          '</g>' +
          '<!-- Right Panel: Code Example -->' +
          '<g transform="translate(560, 55)">' +
            '<rect width="210" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<text x="105" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">R CODE SYNTAX</text>' +
            '<rect x="10" y="45" width="190" height="270" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="75" fill="#f87171" font-size="10" font-weight="bold">ggplot(iris,</text>' +
            '<text x="28" y="95" fill="#fbbf24" font-size="9">aes(x = Sepal.Len,</text>' +
            '<text x="48" y="112" fill="#fbbf24" font-size="9">y = Petal.Len,</text>' +
            '<text x="48" y="129" fill="#fbbf24" font-size="9">color = Species)) +</text>' +
            '<text x="20" y="155" fill="#34d399" font-size="10" font-weight="bold">geom_point(size = 3) +</text>' +
            '<text x="20" y="180" fill="#38bdf8" font-size="10" font-weight="bold">geom_smooth(method="lm") +</text>' +
            '<text x="20" y="205" fill="#818cf8" font-size="10" font-weight="bold">facet_wrap(~ Species) +</text>' +
            '<text x="20" y="230" fill="#c084fc" font-size="10" font-weight="bold">theme_minimal()</text>' +
            '<line x1="20" y1="250" x2="190" y2="250" stroke="#334155"/>' +
            '<text x="105" y="280" fill="#34d399" font-size="9" text-anchor="middle">Publication-Ready Plot</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'aes-vs-setting',
      text: {
        en: '2. Aesthetic Mapping vs Static Attribute Setting',
        bn: '২. অ্যাসথেটিক ম্যাপিং বনাম স্ট্যাটিক অ্যাট্রিবিউট সেটিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent point of confusion for beginners is the distinction between mapping a variable inside aes() versus setting a fixed constant outside aes():',
        bn: 'নতুনদের জন্য একটি সাধারণ বিভ্রান্তি হলো aes() এর ভেতরে ভেরিয়েবল ম্যাপ করা বনাম aes() এর বাইরে নির্দিষ্ট মান সেট করার পার্থক্য:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Mapping inside aes(color = species): Connects visual properties (color, shape, size) to data column values, generating an automatic legend.',
          bn: '১. aes(color = species) এর ভেতরে ম্যাপিং: ভিজ্যুয়াল বৈশিষ্ট্যগুলোকে (রং, আকার) ডাটা কলামের মানের সাথে যুক্ত করে স্বয়ংক্রিয় লেজেন্ড তৈরি করে।'
        },
        {
          en: '2. Setting outside aes: geom_point(color = "darkblue", size = 3) applies a uniform fixed color and size across every point in the layer without generating a legend.',
          bn: '২. aes এর বাইরে সেটিং: geom_point(color = "darkblue", size = 3) কোনো লেজেন্ড তৈরি না করেই লেয়ারের প্রতিটি পয়েন্টে একই রং ও আকার প্রয়োগ করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'geoms-and-facets',
      text: {
        en: '3. Core Geoms & Small Multiples (Faceting)',
        bn: '৩. প্রধান জিওম এবং স্মল মাল্টিপলস (ফেসেটিং)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Common geometric representations include geom_point() for scatter plots, geom_line() for time-series trends, geom_boxplot() for showing distributions across categories, and geom_smooth() for fitted trend lines. When dealing with multi-group data, facet_wrap(~ group) splits the graphic into small multiples sharing consistent axes.',
        bn: 'সাধারণ জ্যামিতিক রূপগুলোর মধ্যে রয়েছে স্ক্যাটার প্লটের জন্য geom_point(), টাইম-সিরিজ ট্রেন্ডের জন্য geom_line(), ডিস্ট্রিবিউশন প্রদর্শনের জন্য geom_boxplot() এবং ট্রেন্ড লাইনের জন্য geom_smooth()। একাধিক গ্রুপ থাকলে facet_wrap(~ group) গ্রাফিক্সটিকে ছোট ছোট সুষম প্যানেলে বিভক্ত করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Layered Grammar of Graphics Engine in TypeScript',
        bn: '৪. TypeScript এ গ্রামার অব গ্রাফিক্স ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements the core components of the Grammar of Graphics: mapping data fields to X/Y canvas coordinates, applying categorical color aesthetics, and computing a linear trendline:',
        bn: 'নিচের TypeScript প্রোগ্রামটি গ্রামার অব গ্রাফিক্সের মূল উপাদানগুলো বাস্তবায়ন করে: ডাটা ফিল্ডগুলোকে ক্যানভাস X/Y কোঅর্ডিনেটে ম্যাপ করা, ক্যাটাগরিভিত্তিক কালার অ্যাসথেটিক প্রয়োগ এবং লিনিয়ার ট্রেন্ডলাইন হিসাব করা:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of ggplot2 aesthetic coordinates mapping, geom_point rendering, and linear regression smoothing.',
        bn: 'ggplot2 অ্যাসথেটিক কোঅর্ডিনেট ম্যাপিং, geom_point রেন্ডারিং এবং লিনিয়ার রিগ্রেশন স্মুদিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of ggplot2 Grammar of Graphics in TypeScript

interface DataPoint {
  xVal: number;
  yVal: number;
  species: string;
}

interface CanvasPoint {
  canvasX: number;
  canvasY: number;
  color: string;
}

class GgplotLayer {
  private data: DataPoint[];
  private width: number = 800;
  private height: number = 400;

  constructor(data: DataPoint[]) {
    this.data = data;
  }

  // Map data to canvas coordinates (Scales layer)
  mapCoordinates(): CanvasPoint[] {
    const xMin = Math.min(...this.data.map((d) => d.xVal));
    const xMax = Math.max(...this.data.map((d) => d.xVal));
    const yMin = Math.min(...this.data.map((d) => d.yVal));
    const yMax = Math.max(...this.data.map((d) => d.yVal));

    const colorPalette: Record<string, string> = {
      setosa: '#ef4444',
      versicolor: '#10b981',
      virginica: '#3b82f6'
    };

    return this.data.map((pt) => {
      // Scale x and y to canvas dimensions
      const cx = ((pt.xVal - xMin) / (xMax - xMin || 1)) * (this.width - 40) + 20;
      const cy = this.height - (((pt.yVal - yMin) / (yMax - yMin || 1)) * (this.height - 40) + 20);
      return {
        canvasX: Math.round(cx),
        canvasY: Math.round(cy),
        color: colorPalette[pt.species] || '#ffffff'
      };
    });
  }

  // geom_smooth(method = "lm"): Ordinary Least Squares regression
  fitLinearTrend(): { slope: number; intercept: number } {
    const n = this.data.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXX = 0;

    for (const d of this.data) {
      sumX += d.xVal;
      sumY += d.yVal;
      sumXY += d.xVal * d.yVal;
      sumXX += d.xVal * d.xVal;
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    return {
      slope: Number(slope.toFixed(2)),
      intercept: Number(intercept.toFixed(2))
    };
  }
}

// Sample dataset
const sampleObservations: DataPoint[] = [
  { xVal: 4.5, yVal: 1.3, species: 'setosa' },
  { xVal: 5.5, yVal: 3.8, species: 'versicolor' },
  { xVal: 6.8, yVal: 5.5, species: 'virginica' }
];

const plot = new GgplotLayer(sampleObservations);
const renderedPoints = plot.mapCoordinates();

console.log('Rendered points count: ' + renderedPoints.length); // -> 3
console.log('First point canvas coords: X=' + renderedPoints[0].canvasX + ', Y=' + renderedPoints[0].canvasY + ', Color=' + renderedPoints[0].color);

const trend = plot.fitLinearTrend();
console.log('Fitted regression slope: ' + trend.slope); // -> 1.83
console.log('Fitted regression intercept: ' + trend.intercept); // -> -6.84`
    }
  ],
  exercises: [
    {
      id: 'plot-ex-1',
      kind: 'mcq',
      question: {
        en: 'What occurs when you write aes(color = "blue") inside ggplot() rather than geom_point(color = "blue") outside aes()?',
        bn: 'aes() এর বাইরে geom_point(color = "blue") লেখার বদলে ggplot() এর ভেতর aes(color = "blue") লিখলে কী ঘটে?'
      },
      options: [
        {
          en: 'R treats "blue" as a 1-level categorical variable, assigning its own default palette color (like red) with a legend',
          bn: 'R "blue" কে ১-লেভেলের ক্যাটাগরিক্যাল ভেরিয়েবল হিসেবে গণ্য করে ডিফল্ট প্যালেটের রং (যেমন লাল) অ্যাসাইন করে এবং লেজেন্ড বানায়'
        },
        {
          en: 'R crashes with an unhandled exception and exits',
          bn: 'R ক্র্যাশ করে এবং প্রোগ্রাম থেকে বের হয়ে যায়'
        },
        {
          en: 'All points become invisible transparent dots',
          bn: 'সমস্ত পয়েন্ট অদৃশ্য বা স্বচ্ছ বিন্দুতে পরিণত হয়'
        },
        {
          en: 'The graphic is exported directly to an Adobe Photoshop PSD file',
          bn: 'গ্রাফিকটি সরাসরি অ্যাডোবি ফটোশপের PSD ফাইলে সেভ হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mapping inside aes() maps values to variables; fixed colors belong outside aes().',
        bn: 'aes() এর ভেতরে থাকলে R সেটিকে ডাটা ভেরিয়েবল মনে করে।'
      },
      explanation: {
        en: 'Writing aes(color = "blue") creates a categorical factor with 1 level ("blue") and maps it to R\'s default primary color (reddish-pink). Fixed color strings must be placed outside aes().',
        bn: 'aes(color = "blue") দিলে R "blue" কে একটি ডাটা লেভেল ভেবে ডিফল্ট রং দেয়। নির্দিষ্ট রং সেট করতে aes() এর বাইরে লিখতে হয়।'
      }
    },
    {
      id: 'plot-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which ggplot2 geom is best suited for showing distributions via a 5-number summary (median, quartiles, and outliers)?',
        bn: '৫-সংখ্যার সামারি (মিডিয়ান, কোয়ার্টাইল ও আউটলায়ার) দিয়ে ডাটার ডিস্ট্রিবিউশন প্রদর্শনের জন্য কোন ggplot2 জিওম সবচেয়ে উপযুক্ত?'
      },
      options: [
        {
          en: 'geom_boxplot()',
          bn: 'geom_boxplot()'
        },
        {
          en: 'geom_line()',
          bn: 'geom_line()'
        },
        {
          en: 'geom_blank()',
          bn: 'geom_blank()'
        },
        {
          en: 'geom_path()',
          bn: 'geom_path()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The geometric shape shaped like a box with whiskers.',
        bn: 'হুইস্কার বিশিষ্ট বাক্সের মতো জ্যামিতিক চিত্র।'
      },
      explanation: {
        en: 'geom_boxplot() visualizes the distribution of continuous variables through median, interquartile range (IQR), whiskers, and outliers.',
        bn: 'geom_boxplot() মিডিয়ান, IQR, হুইস্কার এবং আউটলায়ারের মাধ্যমে ডাটার ডিস্ট্রিবিউশন প্রদর্শন করে।'
      }
    },
    {
      id: 'plot-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the purpose of facet_wrap() in ggplot2?',
        bn: 'ggplot2 তে facet_wrap() এর উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It splits the data into small multiple panels based on a categorical variable',
          bn: 'এটি কোনো ক্যাটাগরিক্যাল ভেরিয়েবলের ওপর ভিত্তি করে ডাটাকে একাধিক ছোট ছোট প্যানেলে বিভক্ত করে'
        },
        {
          en: 'It rotates the canvas by 90 degrees clockwise',
          bn: 'এটি ক্যানভাসকে ঘড়ির কাঁটার দিকে ৯০ ডিগ্রি ঘুরিয়ে দেয়'
        },
        {
          en: 'It wraps long string titles onto multiple lines',
          bn: 'এটি লম্বা শিরোনামগুলোকে একাধিক লাইনে মুড়ে দেয়'
        },
        {
          en: 'It saves the plot into an encrypted zip container',
          bn: 'এটি প্লটটিকে একটি এনক্রিপ্ট করা জিপ ফাইলে সেভ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Faceting produces small multiples for comparison across categories.',
        bn: 'ফেসেটিং ক্যাটাগরিগুলোর মধ্যে তুলনার জন্য ছোট ছোট প্যানেল তৈরি করে।'
      },
      explanation: {
        en: 'facet_wrap() implements small multiples, wrapping a 1D sequence of panels into a 2D grid based on a categorical variable.',
        bn: 'facet_wrap() ক্যাটাগরিক্যাল ভেরিয়েবলের ভিত্তিতে গ্রাফটিকে আলাদা আলাদা প্যানেলে সাজিয়ে সুন্দর তুলনা উপস্থাপন করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-plots-and-the-geom',
    title: {
      en: 'ggplot2 and Grammar of Graphics Quiz',
      bn: 'ggplot2 এবং গ্রামার অব গ্রাফিক্স কুইজ'
    },
    questions: [
      {
        id: 'plot-q1',
        kind: 'mcq',
        question: {
          en: 'Which operator is used in ggplot2 to add new layers, geoms, scales, or themes to an existing plot?',
          bn: 'বিদ্যমান প্লটে নতুন লেয়ার, জিওম, স্কেল বা থিম যুক্ত করতে ggplot2 তে কোন অপারেটর ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'The plus operator (+)',
            bn: 'প্লাস অপারেটর (+)'
          },
          {
            en: 'The pipe operator (|> or %>%)',
            bn: 'পাইপ অপারেটর (|> বা %>%)'
          },
          {
            en: 'The double colon (::)',
            bn: 'ডাবল কোলন (::)'
          },
          {
            en: 'The tilde operator (~)',
            bn: 'টিল্ডা অপারেটর (~)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think: adding layers together.',
          bn: 'ভাবুন: একের সাথে আরেক লেয়ার যোগ করা।'
        },
        explanation: {
          en: 'ggplot2 uses the plus operator (+) to compose and stack layers on top of the base graphic specification.',
          bn: 'ggplot2 তে বেস গ্রাফের ওপর নতুন নতুন লেয়ার সাজাতে প্লাস (+) অপারেটর ব্যবহার করা হয়।'
        }
      },
      {
        id: 'plot-q2',
        kind: 'mcq',
        question: {
          en: 'What function in ggplot2 adds a linear regression trend line with confidence intervals?',
          bn: 'কনফিডেন্স ইন্টারভ্যাল সহ লিনিয়ার রিগ্রেশন ট্রেন্ড লাইন যুক্ত করতে ggplot2 এর কোন ফাংশনটি ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'geom_smooth(method = "lm")',
            bn: 'geom_smooth(method = "lm")'
          },
          {
            en: 'geom_linear_model()',
            bn: 'geom_linear_model()'
          },
          {
            en: 'stat_regression_line()',
            bn: 'stat_regression_line()'
          },
          {
            en: 'geom_predict()',
            bn: 'geom_predict()'
          }
        ],
        answer: 0,
        hint: {
          en: '"lm" stands for linear model inside geom_smooth().',
          bn: 'geom_smooth() এর ভেতরে "lm" মানে লিনিয়ার মডেল।'
        },
        explanation: {
          en: 'geom_smooth(method = "lm") fits and displays an ordinary least squares regression line along with standard error ribbon bands.',
          bn: 'geom_smooth(method = "lm") স্ট্যান্ডার্ড এরর ব্যান্ড সহ লিনিয়ার রিগ্রেশন ট্রেন্ড লাইন প্রদর্শন করে।'
        }
      },
      {
        id: 'plot-q3',
        kind: 'mcq',
        question: {
          en: 'What is the purpose of coord_flip() in ggplot2?',
          bn: 'ggplot2 তে coord_flip() এর কাজ কী?'
        },
        options: [
          {
            en: 'It flips the Cartesian coordinates so horizontal becomes vertical and vertical becomes horizontal',
            bn: 'এটি কার্টেসিয়ান অক্ষ অদলবদল করে ফলে আনুভূমিক অক্ষ উল্লম্ব এবং উল্লম্ব অক্ষ আনুভূমিক হয়'
          },
          {
            en: 'It inverts all numbers by multiplying them by -1',
            bn: 'এটি تمام সংখ্যাকে -১ দিয়ে গুণ করে উল্টে দেয়'
          },
          {
            en: 'It flips the color spectrum upside down',
            bn: 'এটি কালার স্পেকট্রামকে উল্টে দেয়'
          },
          {
            en: 'It randomly shuffles all rows in the dataset',
            bn: 'এটি ডাটা সেটের تمام সারিকে এলোমেলো করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Very useful for creating horizontal bar charts.',
          bn: 'আনুভূমিক বার চার্ট তৈরির জন্য অত্যন্ত কার্যকর।'
        },
        explanation: {
          en: 'coord_flip() swaps the X and Y axes, making horizontal bar charts and sideways box plots easy to build.',
          bn: 'coord_flip() X এবং Y অক্ষ পরস্পর পরিবর্তন করে আনুভূমিক বার চার্ট বা বক্সপ্লট তৈরি সহজ করে।'
        }
      },
      {
        id: 'plot-q4',
        kind: 'mcq',
        question: {
          en: 'How do you export a ggplot2 visualization to an external file (e.g. PNG, PDF, SVG) with high resolution?',
          bn: 'উচ্চ রেজোলিউশনে বাহ্যিক ফাইলে (যেমন PNG, PDF, SVG) একটি ggplot2 ভিজ্যুয়ালাইজেশন কীভাবে সেভ করা হয়?'
        },
        options: [
          {
            en: 'ggsave("plot.png", width = 8, height = 6, dpi = 300)',
            bn: 'ggsave("plot.png", width = 8, height = 6, dpi = 300)'
          },
          {
            en: 'plot.export_image("plot.png")',
            bn: 'plot.export_image("plot.png")'
          },
          {
            en: 'save_canvas("plot.png")',
            bn: 'save_canvas("plot.png")'
          },
          {
            en: 'render_disk("plot.png")',
            bn: 'render_disk("plot.png")'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard function is ggsave().',
          bn: 'মানসম্মত ফাংশনটি হলো ggsave()।'
        },
        explanation: {
          en: 'ggsave() is the primary utility for saving the active or specified ggplot graphic to disk, supporting custom dimensions and DPI resolution.',
          bn: 'ggsave() হলো সক্রিয় ggplot গ্রাফিককে কাঙ্ক্ষিত রেজোলিউশন ও আকারে ফাইলে সংরক্ষণ করার প্রধান ইউটিলিটি।'
        }
      },
      {
        id: 'plot-q5',
        kind: 'mcq',
        question: {
          en: 'Which ggplot2 component controls non-data visual elements like background grid color, legend position, and title font sizes?',
          bn: 'ব্যাকগ্রাউন্ড গ্রিডের রং, লেজেন্ডের অবস্থান ও ফন্ট সাইজের মতো ডাটা-বহির্ভূত ভিজ্যুয়াল উপাদানগুলো ggplot2 এর কোন অংশ নিয়ন্ত্রণ করে?'
        },
        options: [
          {
            en: 'The theme layer (e.g. theme_minimal(), theme_bw(), or custom theme())',
            bn: 'থিম লেয়ার (যেমন theme_minimal(), theme_bw(), বা কাস্টম theme())'
          },
          {
            en: 'The aesthetic mapping aes()',
            bn: 'অ্যাসথেটিক ম্যাপিং aes()'
          },
          {
            en: 'The geometry layer geom_point()',
            bn: 'জ্যামিতি লেয়ার geom_point()'
          },
          {
            en: 'The core data frame input',
            bn: 'কোর ডাটা ফ্রেম ইনপুট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Theme adjusts visual styling without altering the data encoding.',
          bn: 'থিম ডাটা পরিবর্তন না করে ভিজ্যুয়াল স্টাইলিং নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'The theme system (theme() and pre-packaged themes) handles all non-data visual aesthetics, including typography, margins, grids, and legend placement.',
          bn: 'থিম সিস্টেম টাইপোগ্রাফি, মার্জিন, গ্রিড এবং লেজেন্ডের অবস্থানের মতো ডাটা-বহির্ভূত ভিজ্যুয়াল উপাদান নিয়ন্ত্রণ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'models-and-the-fit',
    title: {
      en: 'Statistical Modeling in R: Linear & Logistic Regression with lm() & glm()',
      bn: 'R এ স্ট্যাটিস্টিক্যাল মডেলিং: lm() ও glm() দিয়ে লিনিয়ার ও লজিস্টিক রিগ্রেশন'
    }
  }
};
