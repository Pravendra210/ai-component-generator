import React, { useState } from "react";
import Select from "react-select";
import { FiCode, FiStar, FiZap } from "react-icons/fi";

const Home = () => {
  const [framework, setFramework] = useState({
    value: "html-css",
    label: "HTML + CSS",
  });

  const [prompt, setPrompt] = useState("");

  const frameworkOptions = [
    {
      value: "html-css",
      label: "HTML + CSS",
    },
    {
      value: "html-tailwind",
      label: "HTML + Tailwind CSS",
    },
    {
      value: "html-bootstrap",
      label: "HTML + Bootstrap",
    },
  ];

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#0b1120",
      borderColor: state.isFocused ? "#8b5cf6" : "#263247",
      boxShadow: state.isFocused
        ? "0 0 0 1px #8b5cf6"
        : "none",
      minHeight: "48px",
      borderRadius: "12px",
      color: "white",
      cursor: "pointer",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#111827",
      border: "1px solid #263247",
      borderRadius: "12px",
      overflow: "hidden",
      zIndex: 100,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#1e293b" : "#111827",
      color: "white",
      cursor: "pointer",
      padding: "12px 14px",
    }),

    singleValue: (base) => ({
      ...base,
      color: "white",
    }),

    placeholder: (base) => ({
      ...base,
      color: "#64748b",
    }),

    input: (base) => ({
      ...base,
      color: "white",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#94a3b8",
    }),
  };

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Please describe the component you want to generate.");
      return;
    }

    console.log("Framework:", framework.label);
    console.log("Prompt:", prompt);
  };

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#070b14] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[25%] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <section className="relative mx-auto max-w-[1600px] px-5 py-8 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-300">
            <FiStar size={14} />
            <span>AI Powered UI Generator</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Build beautiful UI
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              with AI
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
            Describe the component you want and let AI generate clean,
            responsive code for you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT PANEL */}
          <div className="rounded-2xl border border-slate-800 bg-[#0b1120]/90 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-6">
            {/* Panel Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
                <FiZap size={19} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Describe your component
                </h3>
                <p className="text-xs text-slate-500">
                  Tell AI what you want to build
                </p>
              </div>
            </div>

            {/* Framework */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Framework
              </label>

              <Select
                value={framework}
                onChange={setFramework}
                options={frameworkOptions}
                styles={selectStyles}
                isSearchable={false}
              />
            </div>

            {/* Prompt */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-300">
                  What do you want to create?
                </label>

                <span className="text-xs text-slate-500">
                  {prompt.length}/1000
                </span>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => {
                  if (e.target.value.length <= 1000) {
                    setPrompt(e.target.value);
                  }
                }}
                placeholder="Example: Create a modern pricing card with three plans, gradient buttons, feature lists and a highlighted popular plan..."
                className="min-h-[250px] w-full resize-none rounded-xl border border-slate-800 bg-[#070b14] p-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/20"
            >
              <FiZap
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              <span>Generate Component</span>
            </button>

            {/* Tips */}
            <div className="mt-5 rounded-xl border border-slate-800 bg-[#070b14] p-4">
              <div className="mb-2 flex items-center gap-2">
                <FiCode className="text-purple-400" size={15} />
                <span className="text-xs font-semibold text-slate-300">
                  Pro tip
                </span>
              </div>

              <p className="text-xs leading-5 text-slate-500">
                Be specific about colors, layout, buttons, animations,
                responsiveness and other UI details for better results.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#070b14] shadow-2xl shadow-black/20">
            {/* Output Header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#0b1120] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <FiCode size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Your Creation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Generated component
                  </p>
                </div>
              </div>

              <div className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-400">
                Code Preview
              </div>
            </div>

            {/* Fake Editor */}
            <div className="min-h-[500px] bg-[#070b14] p-4 md:p-5">
              <div className="h-full min-h-[465px] overflow-hidden rounded-xl border border-slate-800 bg-[#050810]">
                {/* Editor Top Bar */}
                <div className="flex items-center border-b border-slate-800 bg-[#0a0f1a] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>

                  <div className="ml-4 rounded-md border border-slate-800 bg-[#070b14] px-3 py-1 text-xs text-slate-400">
                    component.html
                  </div>
                </div>

                {/* Empty State */}
                <div className="flex min-h-[415px] items-center justify-center px-6">
                  <div className="max-w-sm text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                      <FiCode size={28} />
                    </div>

                    <h4 className="text-lg font-semibold text-slate-200">
                      Your code will appear here
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Describe your UI component on the left and click
                      <span className="text-purple-400">
                        {" "}
                        Generate Component
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-[#0b1120]/70 p-4">
            <div className="mb-2 text-sm font-semibold text-white">
              ⚡ Fast generation
            </div>
            <p className="text-xs leading-5 text-slate-500">
              Generate UI components from simple natural-language prompts.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0b1120]/70 p-4">
            <div className="mb-2 text-sm font-semibold text-white">
              🎨 Modern UI
            </div>
            <p className="text-xs leading-5 text-slate-500">
              Create clean and responsive designs for your projects.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0b1120]/70 p-4">
            <div className="mb-2 text-sm font-semibold text-white">
              💻 Clean code
            </div>
            <p className="text-xs leading-5 text-slate-500">
              Get ready-to-use HTML and CSS code generated by AI.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;