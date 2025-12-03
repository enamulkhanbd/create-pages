figma.showUI(__html__, { width: 512, height: 527 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-page') {
    let pageNames;

    switch (msg.designType) {
      case 'Design Web':
        pageNames = [
          "Cover",
          "-----",
          "Mood-board",
          "Information Architecture",
          "User Flow",
          "-----",
          "Wireframe",
          "-----",
          "Draft",
          "Web UI",
          "Responsive UI",
          "-----",
          "Prototyping Web",
          "Prototyping Responsive",
          "-----",
          "Archive"
        ];
        break;

      case 'Design App':
        pageNames = [
          "Cover",
          "-----",
          "User Research",
          "Persona",
          "User Flow",
          "-----",
          "Wireframe - Mobile",
          "Wireframe - Tablet",
          "-----",
          "UI Design",
          "Dark Mode",
          "-----",
          "Prototyping",
          "-----",
          "Archive"
        ];
        break;

      case 'Feedback':
        pageNames = [
          "Cover",
          "-----",
          "Web UI",
          "-----",
          "Archive"
        ];
        break;

      case 'Dev Web':
        pageNames = [
          "Cover",
          "-----",
          "💻 Web UI",
          "📱 Responsive UI",
          "-----",
          "Prototyping Web",
          "Prototyping Responsive",
          "-----",
          "Archive",
        ];
        break;

        case 'Dev App':
        pageNames = [
          "Cover",
          "-----",
          "Mobile UI - Light",
          "Mobile UI - Dark",
          "-----",
          "Tablet UI - Light",
          "Tablet UI - Dark",
          "-----",
          "Prototyping",
        ];
        break;
    }

    if (pageNames) {
      const existingPages = figma.root.children;

      if (existingPages.length > 0) {
        existingPages[0].name = "Cover";
      }

      for (let i = 1; i < existingPages.length; i++) {
        existingPages[i].remove();
      }

      for (let i = 1; i < pageNames.length; i++) {
        const newPage = figma.createPage();
        newPage.name = pageNames[i];
      }

      figma.notify(`✅ ${msg.designType} Pages Created Successfully.`);
    }

    figma.closePlugin();
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
