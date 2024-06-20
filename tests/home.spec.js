import {test} from "@playwright/test";
import { data } from "../data";

test.beforeEach(async ({  page}) => {
    // Runs before each test and signs in each page.


    await page.goto('https://club-administration.qa.qubika.com/#/auth/login');
    await page.getByPlaceholder('Usuario o correo electrónico').fill(data.USER_EMAIL);
    await page.getByPlaceholder('Contraseña').fill(data.USER_PASSWORD);
    await page.locator('div').filter({ hasText: /^Autenticar$/ }).click()
    await page.waitForURL('https://club-administration.qa.qubika.com/#/dashboard');
    await page.getByLabel('Total de contribuciones').isVisible()
});



test('Log in', async ({ page }) => { 

    await page.waitForURL('https://club-administration.qa.qubika.com/#/dashboard');
    await page.getByLabel('Total de contribuciones').isVisible()
});
    
test('Crear Categoria', async ({ page }) => {   
    page.getByRole('link', { name: ' Tipos de Categorias' }).click()
    page.getByRole('button',{name: ' Adicionar'}).click()
     await page.getByLabel('Adicionar tipo de categoría').isVisible()
     page.getByPlaceholder('Nombre de categoría').fill('Nueva Categoria')
    await page.getByRole('button',{name: 'Aceptar'}).click()
    await page.getByLabel('Tipo de categoria adicionada satisfactoriamente').isVisible()
});