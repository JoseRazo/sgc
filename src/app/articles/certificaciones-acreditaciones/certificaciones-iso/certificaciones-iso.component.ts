import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-certificaciones-iso',
  templateUrl: './certificaciones-iso.component.html',
  styleUrls: ['./certificaciones-iso.component.css']
})
export class CertificacionesIsoComponent implements OnInit {
  title = 'SGC | Certificaciones ISO';

  constructor(private titleService: Title) {
    this.loadScripts();
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  loadScripts() {
    const dynamicScripts = [
      '../assets/plugins/js/custom.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }

  }

}
