function no_clicked(buttonId) {
  var yesButton = document.getElementById('yes');
  var noButton = document.getElementById('no');
  var currentYesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  var currentYesWidth = parseFloat(window.getComputedStyle(yesButton).width);
  var currentYesHeight = parseFloat(window.getComputedStyle(yesButton).height);
  var currentNoFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  var currentNoWidth = parseFloat(window.getComputedStyle(noButton).width);
  var currentNoHeight = parseFloat(window.getComputedStyle(noButton).height);

  if (buttonId === 'no') {
      yesButton.style.fontSize = (currentYesFontSize + 2) + 'px';
      yesButton.style.width = (currentYesWidth * 1.2) + 'px';
      yesButton.style.height = (currentYesHeight * 1.2) + 'px';

      noButton.style.fontSize = (currentNoFontSize - 2) + 'px';
      noButton.style.width = (currentNoWidth * 0.8) + 'px';
      noButton.style.height = (currentNoHeight * 0.8) + 'px';
  }
  }
