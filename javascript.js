document.body.addEventListener('click', () => {
    let accordions = document.getElementsByClassName('cardAccordionActive');
    Array.prototype.forEach.call(accordions, function (el) {
      el.classList.remove('cardAccordionActive');
    });
  });
  
  const cats = document.querySelectorAll('.card_accordion');
  
  [...cats].forEach((cat) => {
    cat.addEventListener('click', async function () {
      let accordions = document.getElementsByClassName('cardAccordionActive');
      let checkClass = false;
      if (cat.className == 'card_accordion cardAccordionActive') {
        checkClass = true;
      }
      Array.prototype.forEach.call(accordions, function (el) {
        el.classList.remove('cardAccordionActive');
      });
      if (!checkClass) {document.body.addEventListener('click', () => {
  let accordions = document.getElementsByClassName('cardAccordionActive');
  Array.prototype.forEach.call(accordions, function (el) {
    el.classList.remove('cardAccordionActive');
    
  });
});

const cats = document.querySelectorAll('.card_accordion');

[...cats].forEach((cat) => {
  cat.addEventListener('click', async function () {
    let accordions = document.getElementsByClassName('cardAccordionActive');
    let checkClass = false;
    if (cat.className == 'card_accordion cardAccordionActive') {
      checkClass = true;
    }
    Array.prototype.forEach.call(accordions, function (el) {
      el.classList.remove('cardAccordionActive');
    });
    if (!checkClass) {
      cat.classList.add('cardAccordionActive');
      
    }
    event.stopPropagation();
  });
});

        cat.classList.add('cardAccordionActive');
      }
      event.stopPropagation();
    });
  });
  
