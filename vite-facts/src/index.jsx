import { createRoot } from 'react-dom/client'
import './index.css'
import reactLogo from './assets/react.svg'

const root = createRoot(document.getElementById("root"))

function Logo() {
    return (
        <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
    )
}

function Header() {
    return (
        <h1>
            React Facts:
        </h1>
    )
}

function Factlist() {
    return (
<ul>
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
        <li>React has a pretty cool logo</li>
    </ul>
    )
}

root.render(
    <div>
        <Logo />
        <Header />
        <Factlist />
        
    </div>
)

