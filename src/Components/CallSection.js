import Section from "./Section";


const data = [
    {
        title: "My Skills",
        description: "Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content. Simply put loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content"
    },

    {
        title: "Qualification",
        description: "Tempor quisque dui, dapibus lobortis ac pretium ornare. Himenaeos lectus nostra curabitur, et integer sociosqu, ornare torquent ut venenatis phasellus ultricies leo turpis. Aenean molestie imperdiet velit, suspendisse ultrices pretium, a aptent viverra sapien fermentum porta. Ante aliquam, imperdiet vulputate odio diam. Duis lorem ligula, sed eros, habitasse ultricies fringilla lectus hendrerit vivamus leo. Himenaeos inceptos donec fringilla, tempor est tristique, id cubilia euismod nibh justo ad blandit rutrum. Lacus curae neque pharetra, donec facilisis dui fringilla pellentesque. Nisl mattis id, curabitur erat scelerisque consectetur. Per urna volutpat erat, scelerisque phasellus nullam, neque maecenas sapien massa aliquet ut quam. Rutrum odio commodo elit, ultrices potenti mi nec feugiat."
    },

    {
        title: "My Hobbies",
        description: "Tempor quisque dui, dapibus lobortis ac pretium ornare. Himenaeos lectus nostra curabitur, et integer sociosqu, ornare torquent ut venenatis phasellus ultricies leo turpis. Aenean molestie imperdiet velit, suspendisse ultrices pretium, a aptent viverra sapien fermentum porta. Ante aliquam, imperdiet vulputate odio diam. Duis lorem ligula, sed eros, habitasse ultricies fringilla lectus hendrerit vivamus leo. Himenaeos inceptos donec fringilla, tempor est tristique, id cubilia euismod nibh justo ad blandit rutrum. Lacus curae neque pharetra, donec facilisis dui fringilla pellentesque. Nisl mattis id, curabitur erat scelerisque consectetur. Per urna volutpat erat, scelerisque phasellus nullam, neque maecenas sapien massa aliquet ut quam. Rutrum odio commodo elit, ultrices potenti mi nec feugiat."
    }
]


const CallSection = () => {
    return (
        <div>
            {                                                 // inside div whatever we write is taken as string, so put curly braces to calculate
                data.map((value) => (
                    <Section
                        heading={value.title}                         // needs to b calculated, so inside curly braces
                        description={value.description}
                    />
                ))
            }
        </div>
    )
}



export default CallSection;