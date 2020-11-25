When creating components, you have the choice between two different ways:

- Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => 

    const cmp = () => { return <div>some JSX</div> } 
    
    (using ES6 arrow functions as shown here is recommended but optional)

- class-based components (also referred to as "containers", "smart" or "stateful" components) => 

    class Cmp extends Component { render () { return <div>some JSX</div> } } 

You should use 1) as often as possible though. It's the best-practice.