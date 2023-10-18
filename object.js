class PC {

    constructor(cpu, gpu, motherboard, ram, ram_cap, storage_cap) {
        this.cpu  = cpu;
        this.gpu = gpu;
        this.motherboard = motherboard;
        this.ram = ram;
        this.ram_cap = ram_cap;
        this.storage_cap = storage_cap;
    };

}

function getCPU(arg) {
    return arg.cpu;
}

function setCPU(target, cpu) {
    target.cpu = cpu;
}

function getGPU(arg) {
    return arg.gpu;
  }
  
function setGPU(target, gpu) {
    target.gpu = gpu;
}

function getMotherboard(arg) {
    return arg.motherboard;
}

function setMotherboard(target, motherboard) {
    target.motherboard = motherboard;
}

function getRam(arg) {
    return arg.ram;
}

function setRam(target, ram) {
    target.ram = ram;
}

function getRamCap(arg) {
    return arg.ram_cap;
}

function setRamCap(target, ram_cap) {
    target.ram_cap = ram_cap;
}

function getStorageCap(arg) {
    return arg.storage_cap;
}

function setStorageCap(target, storage_cap) {
    target.storage_cap = storage_cap;
}

function createDisplay() {
    var display = "CPU: " + getCPU(pc_1) + "\nGPU: " + getGPU(pc_1) + "\nMotherboard: " + getMotherboard(pc_1) + "\nRam: " + getRam(pc_1) +  + "\nRam Capacity: " + getRamCap(pc_1) + "\nStorage Capacity: " + getStorageCap(pc_1);
    document.getElementById("pc_info").innerHTML = display;
}

pc_1 = new PC("Intel i7-11700k", "NVIDIA GeForce RTX 3070", "Gigabyte Z590 AORUS PRO AX", "TEAMGROUP 3200 DDR4", "32gb", "Samsung 870 Pro 1tb SSD");

createDisplay();

window.addEventListener('storage', function() {
    createDisplay();
});