(function() {var implementors = {};
implementors["chalk_engine"] = [{"text":"impl&lt;'forest, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>, C:&nbsp;<a class=\"trait\" href=\"chalk_engine/context/trait.Context.html\" title=\"trait chalk_engine::context::Context\">Context</a>&lt;I&gt; + 'forest, CO:&nbsp;<a class=\"trait\" href=\"chalk_engine/context/trait.ContextOps.html\" title=\"trait chalk_engine::context::ContextOps\">ContextOps</a>&lt;I, C&gt; + 'forest&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"chalk_engine/logic/struct.SolveState.html\" title=\"struct chalk_engine::logic::SolveState\">SolveState</a>&lt;'forest, I, C, CO&gt;","synthetic":false,"types":["chalk_engine::logic::SolveState"]}];
implementors["chalk_solve"] = [{"text":"impl&lt;I, W, DB, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"chalk_solve/logging_db/struct.WriteOnDropRustIrDatabase.html\" title=\"struct chalk_solve::logging_db::WriteOnDropRustIrDatabase\">WriteOnDropRustIrDatabase</a>&lt;I, W, DB, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"chalk_solve/trait.RustIrDatabase.html\" title=\"trait chalk_solve::RustIrDatabase\">RustIrDatabase</a>&lt;I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;DB&gt;,&nbsp;</span>","synthetic":false,"types":["chalk_solve::logging_db::WriteOnDropRustIrDatabase"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()