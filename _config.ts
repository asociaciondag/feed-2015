import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";

const site = lume();

site.use(postcss());
site.use(inline());
site.copy("img");
site.copy("js");
site.copy("fonts");

export default site;
