import * as ε from '../tools/ε/';

class Title extends ε.Component {

    render() {
        return ε.createHtmlElement('h1', {type: "h1"}, "HELLO WORLD")
    }
}

export default Title;