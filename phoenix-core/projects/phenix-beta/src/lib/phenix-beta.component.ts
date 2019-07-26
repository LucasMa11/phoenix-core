import { Component, OnInit } from '@angular/core';
import { SecurityAdvisor, PasswordManager, Vpn, WindowsHello } from '@lenovo/tan-client-bridge';
import { PhenixBetaService } from './phenix-beta.service';

@Component({
  selector: 'lib-phenix-beta',
  templateUrl: './phenix-beta.component.html',
  styleUrls: ['./phenix-beta.component.css']
})
export class PhenixBetaComponent implements OnInit {

  securityAdvisor: SecurityAdvisor;
  password: PasswordManager;
  vpn: Vpn;
  windowsHello: WindowsHello;

  constructor(vantageShellService: PhenixBetaService) {
    this.securityAdvisor = vantageShellService.getSecurityAdvisor();
    if (this.securityAdvisor) {
      this.password = this.securityAdvisor.passwordManager;
      this.vpn = this.securityAdvisor.vpn;
      this.windowsHello = this.securityAdvisor.windowsHello;
    }
  }

  ngOnInit() {
    this.securityAdvisor.refresh();
  }

}
