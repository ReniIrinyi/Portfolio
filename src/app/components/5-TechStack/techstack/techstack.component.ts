import { Component } from '@angular/core';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss'],
})
export class TechStackComponent {
  faJava = faJava;
  faGitAlt = faGitAlt;
  faJs = faJs;
  faHtml5 = faHtml5;
  faSass = faSass;
  faAngular = faAngular;
  faReact = faReact;
  faNode = faNode;
  faWordpressSimple = faWordpressSimple;
}
