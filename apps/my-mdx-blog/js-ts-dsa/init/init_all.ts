
import { DesignPatterns } from "src/design-patterns/DesignPatterns";
import DSA_Execution from "src/DSA/DSA";
import { all_clousure_problems } from "src/javascript-language-problems/closure/closure";
import { etc_javascript_problems_function_all } from "src/javascript-language-problems/etc/etc";
import javascript_language_problems from "src/javascript-language-problems/javascript-language-problems";
import { init_OOP } from "src/javascript-language-problems/OOP";

export function init_all() {

  // etc_javascript_problems_function_all();
  all_clousure_problems();
  init_OOP();
  DesignPatterns();
  
  DSA_Execution();

  javascript_language_problems();

}