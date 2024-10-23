// @ts-check

//import {test, expect} from '@playwright/test'
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');
const url = 'https://beauty-priority.ru/';



//beforeEach(async ({page}) =>{
 //   await page.goto(url);
//})
test ('загружается главная страница', async ({ page }) =>{
    await page.goto(url);
    //ожидаем, что есть класс в имени которого есть части .t-slds__items-wrapper и .t-slds_animated-none
    //в названии класса они написаны без точек
    const selectorForSliderMainPage = '.t-slds__items-wrapper.t-slds_animated-none'
    const sliderMainPage = await page.$(selectorForSliderMainPage);
    expect (sliderMainPage).toBeTruthy();

    const selectorForEvents = '#rec578985895';
    const events = await page.$(selectorForEvents);
    expect (events).toBeTruthy()

    const selectorForActions = '#rec570710170';
    const actions = await page.$(selectorForActions);
    expect (actions).toBeTruthy()


    const selectorForOurServices = '.t-section__title.t-title.t-title_xs.t-align_left ';
    const ourServices = await page.$(selectorForOurServices);
    expect (ourServices).toBeTruthy()

    const selectorForOurTeam = '#rec247122420';
    const ourTeam = await page.$(selectorForOurTeam);
    expect (ourTeam).toBeTruthy()

    const selectorForTeamFoto = '.t603';
    const TeamFoto = await page.$(selectorForTeamFoto)
    expect (TeamFoto).toBeTruthy()

    const selectorForWorksFoto = '#rec365143582';
    const WorksFoto = await page.$(selectorForWorksFoto)
    expect (WorksFoto).toBeTruthy()

    const selectorAboutUs = '#rec247126236';
    const AboutUs = await page.$(selectorAboutUs)
    expect (AboutUs).toBeTruthy();

    const selectorForYourQuestion = '#rec162574512'
    const YourQuestion = await page.$(selectorForYourQuestion)
    expect (YourQuestion).toBeTruthy()

    const selectorForClientsFeedback = '#rec121302375'
    const ClientsFeedback = await page.$(selectorForClientsFeedback)
    expect (ClientsFeedback).toBeTruthy()

    const selectorForFooter = '#t-footer'
    const Footer = await page.$(selectorForFooter)
    expect (Footer).toBeTruthy()

    const selectorbuttonForOnline = 'body > a.yButton.bottom.right > div.yButtonWave'
    const buttonForOnline = await page.$(selectorbuttonForOnline)
    expect (buttonForOnline).toBeTruthy()


    
    });




    test ('Проверяем наличие и доступность блоков сайта', async ({page}) =>{
        await page.goto(url);




    })



   