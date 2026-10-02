// Test simulations for all 8 accessibility lessons

// Sim 1: Retrofit Cost Multiplier
function sim1() {
  const designCost = 10;
  const devCost = designCost * 10; // 100
  const postReleaseCost = designCost * 100; // 1000
  const litigationCost = designCost * 1000; // 10000
  return { designCost, devCost, postReleaseCost, litigationCost };
}

// Sim 2: Native Button vs ARIA Div Byte Size
function sim2() {
  const nativeHtml = '<button type="submit">Pay</button>';
  const ariaDiv = '<div role="button" tabindex="0" class="btn" onkeydown="handleKey(event)">Pay</div>';
  const nativeBytes = Buffer.byteLength(nativeHtml, 'utf8'); // 35
  const ariaBytes = Buffer.byteLength(ariaDiv, 'utf8'); // 82
  const overheadRatio = Number((ariaBytes / nativeBytes).toFixed(1)); // 2.3x
  return { nativeBytes, ariaBytes, overheadRatio };
}

// Sim 3: AccName computation cascade
function sim3() {
  function computeAccName(element) {
    if (element.ariaLabelledBy) return element.ariaLabelledByText;
    if (element.ariaLabel) return element.ariaLabel;
    if (element.textContent) return element.textContent.trim();
    if (element.title) return element.title;
    return '';
  }

  const sample = {
    ariaLabelledBy: null,
    ariaLabel: 'Shopping Bag with 3 items',
    textContent: 'Cart',
    title: 'Click to open'
  };
  const computed = computeAccName(sample);
  return { computed, winner: 'ariaLabel' };
}

// Sim 4: Modal Focus Ring Index Wrapping
function sim4() {
  const modalElements = ['closeButton', 'emailInput', 'confirmButton'];
  const count = modalElements.length; // 3

  function nextFocus(currentIdx, isShift) {
    if (isShift) {
      return (currentIdx - 1 + count) % count;
    }
    return (currentIdx + 1) % count;
  }

  const forwardFromEnd = nextFocus(2, false); // index 0 (wraps from confirmButton to closeButton)
  const backwardFromStart = nextFocus(0, true); // index 2 (wraps from closeButton to confirmButton)

  return { count, forwardFromEnd, backwardFromStart };
}

// Sim 5: WCAG 2.1 Color Contrast Ratio
function sim5() {
  function sRgbToLin(c) {
    c = c / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  function getLuminance(r, g, b) {
    return 0.2126 * sRgbToLin(r) + 0.7152 * sRgbToLin(g) + 0.0722 * sRgbToLin(b);
  }

  function getContrast(rgb1, rgb2) {
    const l1 = getLuminance(...rgb1);
    const l2 = getLuminance(...rgb2);
    const brighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return Number(((brighter + 0.05) / (darker + 0.05)).toFixed(2));
  }

  const white = [255, 255, 255];
  const black = [0, 0, 0];
  const brandGray = [118, 118, 118]; // #767676
  const lightGray = [148, 148, 148]; // #949494

  const ratioBlackWhite = getContrast(black, white); // 21.0
  const ratioBrand = getContrast(brandGray, white); // 4.54 (passes 4.5)
  const ratioLight = getContrast(lightGray, white); // 2.94 (fails 4.5)

  return { ratioBlackWhite, ratioBrand, ratioLight };
}

// Sim 6: Flash frequency seizure safety threshold
function sim6() {
  const maxSafeFlashesPerSec = 3;
  const animatedBannerFrequency = 5; // 5 Hz
  const isSafe = animatedBannerFrequency <= maxSafeFlashesPerSec; // false
  const excessFlashes = animatedBannerFrequency - maxSafeFlashesPerSec; // 2
  return { maxSafeFlashesPerSec, animatedBannerFrequency, isSafe, excessFlashes };
}

// Sim 7: Form validation field error association
function sim7() {
  const formFields = [
    { id: 'email', value: 'invalid-email', hasError: true, errorId: 'email-err', errorText: 'Please enter a valid email address' },
    { id: 'password', value: 'secret123', hasError: false, errorId: null, errorText: null }
  ];
  const invalidCount = formFields.filter(f => f.hasError).length; // 1
  const validCount = formFields.filter(f => !f.hasError).length; // 1
  return { totalFields: formFields.length, invalidCount, validCount };
}

// Sim 8: Automated vs Manual Accessibility Coverage
function sim8() {
  const totalAuditIssues = 100;
  const automatedAxeDetected = 38; // 38%
  const manualOnlyDetected = totalAuditIssues - automatedAxeDetected; // 62%
  return { totalAuditIssues, automatedAxeDetected, manualOnlyDetected };
}

console.log('Sim 1:', sim1());
console.log('Sim 2:', sim2());
console.log('Sim 3:', sim3());
console.log('Sim 4:', sim4());
console.log('Sim 5:', sim5());
console.log('Sim 6:', sim6());
console.log('Sim 7:', sim7());
console.log('Sim 8:', sim8());
