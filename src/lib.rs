// Use a procedural macro to generate bindings for the world we specified in
// `host.wit`
wit_bindgen::generate!({
    // the name of the world in the `*.wit` input file
    world: "root",
});

struct Component;

impl Guest for Component {
    fn transform_html(input: wit_bindgen::rt::string::String) -> i32 {
        1
    }
}
export!(Component);
