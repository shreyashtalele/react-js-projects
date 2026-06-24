
const reactElement = {
    type: 'a',
    props: {
        href: 'https://github.com/hiteshchoudhary/js-hindi-youtube',
        target: '_blank'
    },
    children: 'click to visit repo '
}

function CustomRender(ele, root) {
    const domElement = document.createElement(ele.type)
    domElement.innerHTML = ele.children
    // domElement.setAttribute('href', ele.props.href)
    // domElement.setAttribute('target', ele.props.target)
    // root.appendChild(domElement)
    for (prop in ele.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, ele.props[prop])
    }
    root.appendChild(domElement)

}

const root = document.getElementById('root')
CustomRender(reactElement, root)
