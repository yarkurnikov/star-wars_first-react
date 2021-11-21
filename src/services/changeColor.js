/* 
Формат CSS-переменной:
--theme-default-УникальноеИмя #дефолтная переменная 
--theme-light-УникальноеИмя # для "Light"
--theme-dark-УникальноеИмя # для "Dark"
--theme-neitral-УникальноеИмя # для "Neitral"
*/

export const changeColor = theme => {
    const root = document.querySelector(':root');

    const cssVariables = ['header', 'bgimage'];

    cssVariables.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
             `var(--theme-${theme}-${element})`
        );
    })
}