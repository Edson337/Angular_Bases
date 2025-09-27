import { Component, OnInit, signal } from '@angular/core';

@Component({
    templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(35);

    getHeroDescription() {
        return `${this.name()} tiene ${this.age()} años.`;
    }

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        this.age.set(60);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}