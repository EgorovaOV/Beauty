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
    const sliderMainPage = await page.$('.t-slds__items-wrapper.t-slds_animated-none');
    expect (sliderMainPage).toBeTruthy();

    const selectorForEvents = '.r.t-rec.t-rec_pt_0.t-rec_pb_15 #rec578985895';
    const events = await page.$('.data-tile-ratio');
    expect (events).toBeTruthy()

    const actions = await page.$('t478__sizer t-col t-col_7');
    expect (actions).toBeTruthy()


    });



   