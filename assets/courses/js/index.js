// update sidebar title 
export function updateTitleContent() {
  $(document).ready(function() {
    // ... (rest of your navigation code)
      var activeSectionContent = $('.active-section').html();
      $('#title').html(activeSectionContent);
  });
}

// active sidebar title 
export function activeTitleContent() {
  // Title content changes code
  $(document).ready(function() {
    // ... (rest of your title update code)
     //active section code 
    $('.nav-link').on('click', function(event) {
      event.preventDefault();
      var slideIndex = $(this).data('slide-to');
      $('.carousel-item').removeClass('active');
      $('.carousel-item').eq(slideIndex).addClass('active');
      $('.section').removeClass('active animate-section');
      $('.section').eq(slideIndex).addClass('active animate-section');
      $('.nav-link').removeClass('active-section');
      $(this).addClass('active-section');
      $('.btn-control .prev-slide').prop('disabled', false);
      $('.btn-control .next-slide').prop('disabled', false);
  
      if (slideIndex === 0) {
        $('.btn-control .prev-slide').prop('disabled', true);
      } else if (slideIndex === $('.carousel-item').length - 1) {
        $('.btn-control .next-slide').prop('disabled', true);
      }
      
      // Update #title with active section's content
      updateTitleContent();
    });
  
    // Show initial active section
    var initialSlide = $('.carousel-item.active').index();
    $('.section').eq(initialSlide).addClass('active animate-section');
    $('.nav-link').eq(initialSlide).addClass('active-section');
     // Update #title with active section's content
    updateTitleContent();
  });
}

// btnControls 
export function initializeBtnControls() {
  //btn controls 
  $(document).ready(function() {
    // ... (rest of your button controls code)
    $('.btn-control .prev-slide').on('click', function() {
      var currentSlide = $('.carousel-item.active').index();
      if (currentSlide > 0) {
        $('.carousel-item').removeClass('active');
        $('.carousel-item').eq(currentSlide - 1).addClass('active');
        $('.section').removeClass('active animate-section');
        $('.section').eq(currentSlide - 1).addClass('active animate-section');
        $('.nav-link').removeClass('active-section');
        $('.nav-link').eq(currentSlide - 1).addClass('active-section');
         // Update #title with active section's content
        updateTitleContent();
        
       $('.btn-control .next-slide').prop('disabled', false);
        if (currentSlide - 1 === 0) {
          $('.btn-control .prev-slide').prop('disabled', true);
        }
      }
    });
  
    $('.btn-control .next-slide').on('click', function() {
      var currentSlide = $('.carousel-item.active').index();
      if (currentSlide < $('.carousel-item').length - 1) {
        $('.carousel-item').removeClass('active');
        $('.carousel-item').eq(currentSlide + 1).addClass('active');
        $('.section').removeClass('active animate-section');
        $('.section').eq(currentSlide + 1).addClass('active animate-section');
        $('.nav-link').removeClass('active-section');
        $('.nav-link').eq(currentSlide + 1).addClass('active-section');
         // Update #title with active section's content
        updateTitleContent();
        
       $('.btn-control .prev-slide').prop('disabled', false);
        if (currentSlide + 1 === $('.carousel-item').length - 1) {
          $('.btn-control .next-slide').prop('disabled', true);
        }
      }
    });
  });
}

// bodyHeight
export function adjustContentHeight() {
  //body height coding
  $(document).ready(function() {
    // ... (rest of your body height code)
    function adjustContentHeight() {
      const headerHeight = $('#header').outerHeight();
      const footerHeight = $('#footer').outerHeight();
      const windowHeight = $(window).height();

      const mainContentHeight = windowHeight - headerHeight - footerHeight;
     $('#sidebar').css('max-height', mainContentHeight);
      $('#content-bar').css('max-height', mainContentHeight);
    }

    // Call the function initially and on window resize
    adjustContentHeight();
    $(window).resize(adjustContentHeight);
  });
}

// accordion attributes 
export function addAccordionAttributes() {
  $(document).ready(function() {
    // Accordion attributes logic here
    $('.accordion-body').attr({
        'data-bs-dismiss': 'offcanvas',
        'aria-label': 'Close'
    });
  });
}

// Sidebar and Offcanvas Content
export function appendAppropriateContent() {
  // Sidebar and offcanvas content add html 
  function appendAppropriateContent() {
    const width = $(window).width();
    const accordionHTML = $('<div>').addClass('accordion').attr('id', 'faqAccordion');
  
    if (width < 768) {
      $('#offcanvas-html').html(accordionHTML);
    } else {
      $('#sidebar-html').html(accordionHTML);
    }
  }
  // Initial append based on window width
  appendAppropriateContent();
}

// side navbar elements 
export class AccordionItem {
  // Side navbar logic here
  constructor(id, btnClass, headerText, navItems, content) {
    this.id = id;
    this.btnClass = btnClass;
    this.headerText = headerText;
    this.navItems = navItems;
    this.content = content;
  }

  createAccordionItem() {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');

    const accordionHeader = document.createElement('h2');
    accordionHeader.classList.add('accordion-header');
    accordionHeader.id = `heading${this.id}`;

    const accordionButton = document.createElement('button');
    accordionButton.classList.add('accordion-button', 'p-2', this.btnClass);
    accordionButton.type = 'button';
    accordionButton.dataset.bsToggle = 'collapse';
    accordionButton.dataset.bsTarget = `#collapse${this.id}`;
    accordionButton.setAttribute('aria-expanded', this.id === 1 ? 'true' : 'false');
    accordionButton.setAttribute('aria-controls', `collapse${this.id}`);
    accordionButton.innerHTML = this.headerText;

    accordionHeader.appendChild(accordionButton);

    const accordionCollapse = document.createElement('div');
    accordionCollapse.id = `collapse${this.id}`;
    accordionCollapse.classList.add('accordion-collapse', 'collapse', this.id === 1 ? 'show' : 'na');
   
    accordionCollapse.setAttribute('aria-labelledby', `heading${this.id}`);
    accordionCollapse.dataset.bsParent = '#faqAccordion';

    const accordionBody = document.createElement('div');
    accordionBody.classList.add('accordion-body', 'p-2');

    const navList = document.createElement('ul');
    navList.classList.add('nav', 'flex-column');
    
    // nav elements 
    this.navItems.forEach((item, index) => {
      const navItem = document.createElement('li');
      navItem.classList.add('nav-item', 'border-bottom');

      const navLink = document.createElement('a');
      navLink.classList.add('nav-link');
      navLink.classList.add(index === 0 ? 'active-section' : 'na'); 
      navLink.href = '#';
      navLink.dataset.slideTo = (this.id - 1) * 2 + index;
      navLink.innerHTML = item;

      navItem.appendChild(navLink);
      navList.appendChild(navItem);
    });

    accordionBody.appendChild(navList);
    accordionCollapse.appendChild(accordionBody);

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);
    
   // section elements 
    this.content.forEach((item, index) => {
      // Create section element
      const element = document.createElement('section');
      element.classList.add('carousel-item', 'section');

      // fetch.txt file and 
      fetch(item)
        .then(response => response.text())
        .then(markdownText => {
          // Convert Markdown to HTML 
          const htmlText = marked(markdownText); 
         // Set the innerHTML
          element.innerHTML = htmlText;
        })
        .catch(error => {
          console.error('Error fetching or converting Markdown:', error);
        });
      
      // Append the section element to .carousel-inner
      let carouselInner = document.querySelector('.carousel-inner');
      carouselInner.appendChild(element);

       //add class active content
      let section = document.querySelectorAll('.carousel-item');
      section[0].classList.toggle('active');
      
      return item;
    });

    return accordionItem;
  }
}

// accordionItem to added 
export function createAccordionItems(itemsData) {
  const faqAccordion = document.getElementById('faqAccordion');

  if (faqAccordion) {
    itemsData.forEach(itemData => {
      // ... (rest of your accordion item creation code)
      const accordionItem = new AccordionItem(
        itemData.id, 
        itemData.btnClass, 
        itemData.headerText, 
        itemData.navItems, 
        itemData.content
      );
      
      const accordionElement = accordionItem.createAccordionItem();
      faqAccordion.appendChild(accordionElement);
    });
  }
}

  // prettyprint coding 
export function prettyprint() {
    let code = document.querySelectorAll('code');
    if (code) {
      code.forEach((item) => {
        item.classList.add("prettyprint");
      });
    }
  }
