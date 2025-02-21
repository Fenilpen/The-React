function renderreact(customReact,root){
    
    // const TagA = document.createElement(customReact.type)
    // TagA.innerHTML = customReact.children

    // TagA.setAttribute("href",customReact.props.href)
    // TagA.setAttribute("target",customReact.props.terget)
    // root.appendChild(TagA)
    customReact
    const createElement = document.createElement('a',customReact.type)
    createElement.innerHTML = customReact.children

    for (const prop in customReact.props) {
        // if (prop === customReact.children) continue;
        createElement.setAttribute(prop,customReact.props[prop])
    }
    root.appendChild(createElement)
}


const customReact = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click here to go to google'
}

const root = document.getElementById('root')

renderreact(customReact,root)