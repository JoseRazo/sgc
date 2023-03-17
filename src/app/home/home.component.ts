import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title = "SISTEMA DE GESTIÓN DE LA CALIDAD | UTS";

  constructor(private titleService: Title) {
    this.loadScripts();
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  loadScripts() {
    const dynamicScripts = [
      "assets/plugins/js/style-switcher.js",
      "assets/plugins/js/custom.js",
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement("script");
      node.src = dynamicScripts[i];
      node.type = "text/javascript";
      node.async = false;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
  }
}
