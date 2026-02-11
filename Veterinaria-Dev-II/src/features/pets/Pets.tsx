import PetsList from "./PetsList";

export default function Pets(){
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-white px-4 pt-20">
            
            <h1 className="text-3xl font-bold text-sky-800 text-center mb-2">
                🐶 My Pets
            </h1>
            <p className="text-center text-sky-700 mb-10">
                This is the pets page
            </p>
            <PetsList />
        </div>
    );
}
