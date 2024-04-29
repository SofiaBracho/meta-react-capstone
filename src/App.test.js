import { render, screen } from "@testing-library/react";
import App, { initializeTimes, updateTimes } from './App'

describe("initializeTimes", () => {
    test('returns the correct expected value', () => {
        const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        expect(initializeTimes()).toEqual(expectedValue);
    })
})

describe("updateTimes", () => {
    test("returns the same value that is provided in the state", () => {
        const state = {
        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        // other state properties...
        };

        expect(updateTimes(state.availableTimes)).toEqual(state.availableTimes);
    });
});