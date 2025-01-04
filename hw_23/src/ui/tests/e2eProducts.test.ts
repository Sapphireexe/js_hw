import { credentials } from "../../data/login-form/credentials.data";
import { NOFITICATIONS } from "../../data/notifications";
import { generateProductData } from "../../data/products/generateProduct";
import homePage from "../pages/home.page";
import addNewProductPage from "../pages/Products/addNewProduct.page";
import deleteProductModal from "../pages/Products/deleteProductModal";
import productsPage from "../pages/Products/products.page";
import signInPage from "../pages/signIn.page";

describe("[UI] [Products] e2e test", () => {

    it("Should login, create product and the remove product", async function () {
        await signInPage.open();
        await signInPage.fillCredentials(credentials);
        await signInPage.clickOnLoginButton();
        await homePage.clickOnMenuButton("Products");
        await productsPage.clickOnAddNewProduct();
        const newProduct = generateProductData();
        await addNewProductPage.fillInputs(newProduct);
        await addNewProductPage.clickOnSaveButton();
        const createdNotificationText = await productsPage.getNotificationText();
        expect (createdNotificationText).toBe(NOFITICATIONS.PRODUCT_CREATED);
        await productsPage.clickOnNotificationCloseButton();
        const createdProduct = await productsPage.getProductFromTable(newProduct.name);
        expect (newProduct).toMatchObject(createdProduct);
        await productsPage.clickOnDeleteProductButton(newProduct.name);
        await deleteProductModal.clickOnDeleteButton();
        const deletedNotificationText = await productsPage.getNotificationText();
        expect (deletedNotificationText).toBe(NOFITICATIONS.PRODUCT_DELETED);
        await productsPage.getSearchResults(newProduct.name);
        const searchResult = await productsPage.getText(productsPage["Search result by Product name"]);
        expect (searchResult).toBe("No records created yet");
    });
});