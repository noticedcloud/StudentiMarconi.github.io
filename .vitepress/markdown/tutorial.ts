import type MarkdownIt from "markdown-it";

export function tutorialPlugin(md: MarkdownIt) {
  md.block.ruler.before(
    "fence",
    "tutorial",
    (state, startLine, endLine, silent) => {
      const startPos = state.bMarks[startLine] + state.tShift[startLine];
      const startMax = state.eMarks[startLine];
      const firstLine = state.src.slice(startPos, startMax);

      if (!firstLine.startsWith(":::") || firstLine === ":::") return false;
      if (silent) return true;

      let nextLine = startLine;
      const tokens = [];

      let tutorialOpen = false;
      let stepOpen = false;

      let contentStartLine: number | null = null;

      const flushContent = (endLine: number) => {
        if (contentStartLine !== null) {
          state.md.block.tokenize(state, contentStartLine, endLine);
          contentStartLine = null;
        }
      };

      while (nextLine < endLine) {
        const pos = state.bMarks[nextLine] + state.tShift[nextLine];
        const max = state.eMarks[nextLine];
        const line = state.src.slice(pos, max);

        if (line === ":::") {
          flushContent(nextLine);

          if (stepOpen) {
            const t = state.push("html_block", "", 0);
            t.content = "</TutorialStep>\n";
            stepOpen = false;
          }

          if (tutorialOpen) {
            const t = state.push("html_block", "", 0);
            t.content = "</Tutorial>\n";
          }

          state.line = nextLine + 1;
          return true;
        }

        if (line.startsWith(":::")) {
          const raw = line.slice(3).trim();
          const [title, value] = raw.split(":").map((s) => s.trim());

          if (!tutorialOpen) {
            const t = state.push("html_block", "", 0);
            t.content = "<Tutorial>\n";
            tutorialOpen = true;
          }

          if (stepOpen) {
            flushContent(nextLine);
            const t = state.push("html_block", "", 0);
            t.content = "</TutorialStep>\n";
          }

          let step = `<TutorialStep title="${md.utils.escapeHtml(title)}"`;
          if (value) {
            step += ` noButton="${md.utils.escapeHtml(value)}"`;
          }
          step += ">\n";

          const t = state.push("html_block", "", 0);
          t.content = step;

          stepOpen = true;
          nextLine++;
          continue;
        }

        if (contentStartLine === null) {
          contentStartLine = nextLine;
        }
        nextLine++;
      }

      return false;
    },
  );
}
