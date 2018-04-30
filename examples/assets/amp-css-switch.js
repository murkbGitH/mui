window.addEventListener('load', function() {
  // fetch link element
  var selector = 'link[href="../assets/mui/amp/mui-amp.css"]',
      linkEl = document.querySelector(selector);

  // build element
  var selectEl = document.createElement('select');
  selectEl.innerHTML = [
    '<optgroup label="Basic">',
    '<option value="amp/mui-amp.css" selected>mui-amp.css</option>',
    '<option value="amp/mui-amp.min.css">mui-amp.min.css</option>',
    '<option value="amp/mui-amp-rtl.css">mui-amp-rtl.css</option>',
    '<option value="amp/mui-amp-rtl.min.css">mui-amp-rtl.min.css</option>',
    '</optgroup>',

    '<optgroup label="No Globals">',
    '<option value="extra/mui-amp-noglobals.css">mui-amp-noglobals.css</option>',
    '<option value="extra/mui-amp-noglobals.min.css">mui-amp-noglobals.min.css</option>',
    '<option value="extra/mui-amp-noglobals-rtl.css">mui-amp-noglobals-rtl.css</option>',
    '<option value="extra/mui-amp-noglobals-rtl.min.css">mui-amp-noglobals-rtl.min.css</option>',
    '</optgroup>',

    '<optgroup label="REM">',
    '<option value="extra/mui-amp-rem.css">mui-amp-rem.css</option>',
    '<option value="extra/mui-amp-rem.min.css">mui-amp-rem.min.css</option>',
    '<option value="extra/mui-amp-rem-rtl.css">mui-amp-rem-rtl.css</option>',
    '<option value="extra/mui-amp-rem-rtl.min.css">mui-amp-rem-rtl.min.css</option>',
    '</optgroup>'
  ].join('');

  selectEl.style.position = 'absolute';
  selectEl.style.top = '0px';
  selectEl.style.right = '0px';

  // change css file
  selectEl.addEventListener('change', function(ev) {
    linkEl.href = '../assets/mui/' + this.value + '?' + (new Date());
  });

  document.body.appendChild(selectEl);
});
