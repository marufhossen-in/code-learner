// Test simulations for all 8 Bootstrap lessons

// Sim 1: Grid column width calculation
function sim1() {
  const totalColumns = 12;
  const containerWidth = 1200; // px at xl breakpoint
  const columnSpan = 4; // col-md-4
  const allocatedWidth = (columnSpan / totalColumns) * containerWidth; // 400 px
  const columnCount = totalColumns / columnSpan; // 3 columns
  return { totalColumns, containerWidth, columnSpan, allocatedWidth, columnCount };
}

// Sim 2: Component CSS custom properties count
function sim2() {
  const buttonVars = ['--bs-btn-bg', '--bs-btn-border-color', '--bs-btn-color', '--bs-btn-hover-bg'];
  const varCount = buttonVars.length; // 4
  return { varCount, sampleVar: buttonVars[0] };
}

// Sim 3: Event delegation efficiency
function sim3() {
  const triggerCount = 100;
  const directListeners = triggerCount; // 100
  const delegatedListeners = 1; // 1 single document listener
  const savedListeners = directListeners - delegatedListeners; // 99
  return { triggerCount, directListeners, delegatedListeners, savedListeners };
}

// Sim 4: Modal scrollbar compensation
function sim4() {
  const windowWidth = 1024;
  const clientWidth = 1009;
  const scrollbarWidth = windowWidth - clientWidth; // 15 px
  const appliedPadding = scrollbarWidth; // 15 px
  return { windowWidth, clientWidth, scrollbarWidth, appliedPadding };
}

// Sim 5: Form field validation state machine
function sim5() {
  const fields = [
    { name: 'username', valid: true },
    { name: 'email', valid: false },
    { name: 'terms', valid: true }
  ];
  const total = fields.length; // 3
  const validCount = fields.filter(f => f.valid).length; // 2
  const invalidCount = fields.filter(f => !f.valid).length; // 1
  return { total, validCount, invalidCount };
}

// Sim 6: Spacing scale ladder
function sim6() {
  const baseSpacer = 16; // 1rem = 16px
  const scale = {
    0: 0,
    1: baseSpacer * 0.25, // 4px
    2: baseSpacer * 0.5,  // 8px
    3: baseSpacer * 1.0,  // 16px
    4: baseSpacer * 1.5,  // 24px
    5: baseSpacer * 3.0   // 48px
  };
  return { baseSpacer, step1: scale[1], step3: scale[3], step5: scale[5] };
}

// Sim 7: Sass theme-colors map merging
function sim7() {
  const defaultColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']; // 8
  const customColors = ['brand']; // 1 addition
  const totalMerged = defaultColors.length + customColors.length; // 9
  return { defaultCount: defaultColors.length, addedCount: customColors.length, totalMerged };
}

// Sim 8: Bundle size reduction Bootstrap 4 vs Bootstrap 5
function sim8() {
  const v4BundleKb = 225; // CSS + jQuery + Popper + JS
  const v5BundleKb = 155; // CSS + Popper + Vanilla JS (0 jQuery)
  const savedKb = v4BundleKb - v5BundleKb; // 70 KB
  return { v4BundleKb, v5BundleKb, savedKb };
}

console.log('Sim 1:', sim1());
console.log('Sim 2:', sim2());
console.log('Sim 3:', sim3());
console.log('Sim 4:', sim4());
console.log('Sim 5:', sim5());
console.log('Sim 6:', sim6());
console.log('Sim 7:', sim7());
console.log('Sim 8:', sim8());
