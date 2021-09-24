const btnService = document.getElementById('service');
const btnClose = document.getElementById('btn-close');
const serviceList = document.getElementById('service-list');
btnService.addEventListener('click', () => {
    serviceList.classList.add('open');
    serviceList.classList.remove('close')
    btnService.classList.add('close');
})
btnClose.addEventListener('click', () => {
    serviceList.classList.add('close');
    serviceList.classList.remove('open')
    btnService.classList.remove('close')
})
//----------1 element menu--------//


const btnCompany = document.getElementById('company');
const btnClose2 = document.getElementById('btn-close2');
const companyList = document.getElementById('company-list');
btnCompany.addEventListener('click', () => {
    companyList.classList.add('open');
    companyList.classList.remove('close')
    btnCompany.classList.add('close');
})
btnClose2.addEventListener('click', () => {
    companyList.classList.add('close');
    companyList.classList.remove('open')
    btnCompany.classList.remove('close')
})
//----------2 element menu--------//


const btnSupports = document.getElementById('supports');
const btnClose3 = document.getElementById('btn-close3');
const supportsList = document.getElementById('supports-list');
btnSupports.addEventListener('click', () => {
    supportsList.classList.add('open');
    supportsList.classList.remove('close')
    btnSupports.classList.add('close');
})
btnClose3.addEventListener('click', () => {
    supportsList.classList.add('close');
    supportsList.classList.remove('open')
    btnSupports.classList.remove('close')
})
//----------3 element menu--------//


const btnResources = document.getElementById('resources');
const btnClose4 = document.getElementById('btn-close4');
const resourcesList = document.getElementById('resources-list');
btnResources.addEventListener('click', () => {
    resourcesList.classList.add('open');
    resourcesList.classList.remove('close')
    btnResources.classList.add('close');
})
btnClose4.addEventListener('click', () => {
    resourcesList.classList.add('close');
    resourcesList.classList.remove('open')
    btnResources.classList.remove('close')
})
//----------4 element menu--------//


const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile');

openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('view-menu')
    mobileMenu.classList.remove('closed-menu');
    closeMenu.classList.remove('not-view')
})
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('view-menu');
    mobileMenu.classList.add('closed-menu');
    openMenu.classList.remove('view');
    closeMenu.classList.add('not-view')
})