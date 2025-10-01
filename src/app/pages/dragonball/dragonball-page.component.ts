import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    imports: [
        // NgClass
    ],
    templateUrl: './dragonball-page.component.html'
})
export class DragonBallPageComponent {
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 15000 },
        { id: 2, name: 'Vegeta', power: 12000 },
        { id: 3, name: 'Trunks', power: 8000 },
        { id: 4, name: 'Gohan', power: 9500 },
    ])

    // powerClasses = computed(() => {
    //     return {
    //         'text-danger': true,
    //     }
    // })
}