(function() {var implementors = {};
implementors["chalk_ir"] = [];
implementors["chalk_solve"] = [{"text":"impl&lt;'a, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"chalk_ir/visit/trait.Visitor.html\" title=\"trait chalk_ir::visit::Visitor\">Visitor</a>&lt;'a, I&gt; for <a class=\"struct\" href=\"chalk_solve/clauses/builtin_traits/unsize/struct.UnsizeParameterCollector.html\" title=\"struct chalk_solve::clauses::builtin_traits::unsize::UnsizeParameterCollector\">UnsizeParameterCollector</a>&lt;'a, I&gt;","synthetic":false,"types":["chalk_solve::clauses::builtin_traits::unsize::UnsizeParameterCollector"]},{"text":"impl&lt;'a, 'p, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"chalk_ir/visit/trait.Visitor.html\" title=\"trait chalk_ir::visit::Visitor\">Visitor</a>&lt;'a, I&gt; for <a class=\"struct\" href=\"chalk_solve/clauses/builtin_traits/unsize/struct.ParameterOccurenceCheck.html\" title=\"struct chalk_solve::clauses::builtin_traits::unsize::ParameterOccurenceCheck\">ParameterOccurenceCheck</a>&lt;'a, 'p, I&gt;","synthetic":false,"types":["chalk_solve::clauses::builtin_traits::unsize::ParameterOccurenceCheck"]},{"text":"impl&lt;'me, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"chalk_ir/visit/trait.Visitor.html\" title=\"trait chalk_ir::visit::Visitor\">Visitor</a>&lt;'me, I&gt; for <a class=\"struct\" href=\"chalk_solve/clauses/env_elaborator/struct.EnvElaborator.html\" title=\"struct chalk_solve::clauses::env_elaborator::EnvElaborator\">EnvElaborator</a>&lt;'me, I&gt;","synthetic":false,"types":["chalk_solve::clauses::env_elaborator::EnvElaborator"]},{"text":"impl&lt;'i, '_, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"chalk_ir/visit/trait.Visitor.html\" title=\"trait chalk_ir::visit::Visitor\">Visitor</a>&lt;'i, I&gt; for <a class=\"struct\" href=\"chalk_solve/infer/ucanonicalize/struct.UCollector.html\" title=\"struct chalk_solve::infer::ucanonicalize::UCollector\">UCollector</a>&lt;'_, 'i, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: 'i,&nbsp;</span>","synthetic":false,"types":["chalk_solve::infer::ucanonicalize::UCollector"]},{"text":"impl&lt;'i, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>, DB:&nbsp;<a class=\"trait\" href=\"chalk_solve/trait.RustIrDatabase.html\" title=\"trait chalk_solve::RustIrDatabase\">RustIrDatabase</a>&lt;I&gt;&gt; <a class=\"trait\" href=\"chalk_ir/visit/trait.Visitor.html\" title=\"trait chalk_ir::visit::Visitor\">Visitor</a>&lt;'i, I&gt; for <a class=\"struct\" href=\"chalk_solve/logging_db/id_collector/struct.IdCollector.html\" title=\"struct chalk_solve::logging_db::id_collector::IdCollector\">IdCollector</a>&lt;'i, I, DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: 'i,&nbsp;</span>","synthetic":false,"types":["chalk_solve::logging_db::id_collector::IdCollector"]},{"text":"impl&lt;'infer, 'i, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"chalk_ir/visit/trait.Visitor.html\" title=\"trait chalk_ir::visit::Visitor\">Visitor</a>&lt;'i, I&gt; for <a class=\"struct\" href=\"chalk_solve/solve/truncate/struct.TySizeVisitor.html\" title=\"struct chalk_solve::solve::truncate::TySizeVisitor\">TySizeVisitor</a>&lt;'infer, 'i, I&gt;","synthetic":false,"types":["chalk_solve::solve::truncate::TySizeVisitor"]},{"text":"impl&lt;'i, I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"chalk_ir/visit/trait.Visitor.html\" title=\"trait chalk_ir::visit::Visitor\">Visitor</a>&lt;'i, I&gt; for <a class=\"struct\" href=\"chalk_solve/wf/struct.InputTypeCollector.html\" title=\"struct chalk_solve::wf::InputTypeCollector\">InputTypeCollector</a>&lt;'i, I&gt;","synthetic":false,"types":["chalk_solve::wf::InputTypeCollector"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()