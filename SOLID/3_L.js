// Liskov substitution principle

// class Person {
    
// }

// class Member extends Person {
//     access(){
//         console.log('You have access')
//     }
// }

// class Guest extends Person {
//     isGuest = true
// }

// class Frontend extends Member{
//     canCreateFrontend(){ }
// }

// class Backend extends Member {
//     canCreateBackend(){ }
// }

// class PersonFromDifferentCompane extends Guest {
//     access(){
//         throw new Error('You do NOT have access')
//     }
// }

// function openSecretDoor(member){
//     member.access()
// }

// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
//openSecretDoor(new PersonFromDifferentCompane())

// =================================

class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component{
    render(){
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}


class HeaderComponent extends ComponentWithTemplate {
    onInit(){}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit(){}
}

function renderComponent (component){
    console.log(component.render())
}

class HOC extends HigherOrderComponent {
    render(){
        throw new Error('Render is iimpossible here')
    }

    wrapComponent(component){
        component.wrapped = true
        return component
    }
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
