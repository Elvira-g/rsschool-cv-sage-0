# Elvira Galiakhmedova

## Contacts:

* **Address:** Kolomna, Moscow Area, Russia
* **Phone:** +79261330021
* **E-mail:** elvira_27@mail.ru
* **GitHub:** [Elvira-g](https://github.com/Elvira-g)
* **Telegram:** ellevira

## About
For a large part of my professional life, I have worked in the HR department. At the age of 30, I realized that this is not the direction I want to develop in. So I decided to change my profession. The direction of IT was always interesting for me, but there was no opportunity to get a second higher education. So when various courses for changing specialization appeared, I decided to try myself. Now my main goal is to gain knowledge and start my career in the area that is really interesting to me.

## Skills
* HTML5/CSS3
* jQuery
* JavaScript (Fundamentals)
* React (in process, Skillbox courses)
* PHP, Laravel (Fundamentals)
* Git
* Figma

## Code Examples
**JavaScript**

```let menuIcon = document.querySelector('.mob-menu-icon');
let mobMenu = document.querySelector('.mob-menu');
let mobMenuItem = document.querySelectorAll('.mob-menu-item');

menuIcon.addEventListener('click', () => {
  if (mobMenu.style.maxHeight){
    mobMenu.style.maxHeight = null;
    menuIcon.setAttribute('style', 'background-image: url(img/menu-btn.svg)');
  } else {
    mobMenu.style.maxHeight = mobMenu.scrollHeight + 'px';
    menuIcon.setAttribute('style', 'background-image: url(img/close-btn.svg)');
  }
})

for (let item of mobMenuItem) {
  item.addEventListener('click', () => {
    mobMenu.style.maxHeight = null;
    menuIcon.setAttribute('style', 'background-image: url(img/menu-btn.svg)');
  })
}```
**PHP**
```<?php
include_once ('models/M_Faq.php');

class C_Faq extends Controller {

    public function action_index () {
        $faq = new M_Faq();
        $result = $faq->showFaq();

        $this->title = 'Часто задаваемые вопросы';
        $this->content = $this->Template('views/v_faq.php', array('faq'=>$result));

    }
}```



