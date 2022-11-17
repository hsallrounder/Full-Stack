const themeColors = document.querySelectorAll('[name="theme"]');

// store themes

const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
}

const applyTheme=function(){
    const activeTheme=localStorage.getItem('theme');

    themeColors.forEach((themeOption) => {
        if(activeTheme==themeOption.id){
            themeOption.checked=true;
        }
    })
}

themeColors.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id)
    })
})

document.onload=applyTheme();