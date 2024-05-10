// import css
import './sample-component.css'
// import libraries

// import components

// Variable declarations

// Component definition
export default function SampleComponent({data}){
    // State variables
    // Hooks
    // Event handlers
    // Helper functions
    // Return statement
    return(
        <div>
            <h1 className="text-primary">Sample Component</h1>
            {
                data.map((item)=>(
                    <p>{item.text}</p>
                ))
            }
        </div>
    )
}