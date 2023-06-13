const tabs = document.querySelectorAll('[data-target]')
const tabsContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => tab.addEventListener('click', () => {
    //console.log(tab) //<button>...</button>
    //console.log(tab.dataset.target) //#projects or #skills
    const target = document.querySelector(tab.dataset.target)
    console.log(target) //<div>Projects</div> or <div>Skills</div>

    tabsContents.forEach(tc => {
        //console.log(tc) //<div>Projects</div> or <div>Skills</div>
        tc.classList.remove('filter-active')
    })

    target.classList.add('filter-active')

    tabs.forEach(tab => {
        tab.classList.remove('tab-filter-active')
    })

    tab.classList.add('tab-filter-active')

}))