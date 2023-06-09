var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Task = /** @class */ (function () {
    function Task() {
    }
    Task.dsiplayTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, tasks, taskContainer, _i, tasks_1, task, taskContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3000/tasks")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        tasks = _a.sent();
                        console.log(tasks);
                        taskContainer = document.getElementById("tasks");
                        for (_i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                            task = tasks_1[_i];
                            taskContent = "\n      <div id=\"task\">\n      <div>\n        <h1>Task Name</h1>\n        <p id=\"taskname\">".concat(task.taskName, "</p>\n      </div>\n  \n      <div>\n        <h2>End Date</h2>\n        <p id=\"enddate\">").concat(task.endDate, "</p>\n      </div>\n  \n      <div>\n        <h3>Assigned to</h3>\n        <p id=\"assignedto\">").concat(task.assignedTo, "</p>\n      </div>\n\n      <button class=\"deletebutton\" onclick=Task.deleteTask(").concat(task.id, ")>\n            <ion-icon name=\"trash\"></ion-icon>\n      </button>\n    </div>\n      ");
                            taskContainer.innerHTML += taskContent;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Task.deleteTask = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3000/tasks/".concat(id), {
                            method: "DELETE",
                            headers: {
                                'content-type': 'application/json',
                            }
                        })];
                    case 1:
                        _a.sent();
                        console.log('task deleted');
                        return [2 /*return*/];
                }
            });
        });
    };
    Task.addTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var taskNameInput, endDateInput, assignedToInput, taskName, endDate, assignedTo, newTask, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskNameInput = document.getElementById('projectname');
                        endDateInput = document.getElementById('enddate');
                        assignedToInput = document.getElementById('assignperson');
                        taskName = taskNameInput.value;
                        endDate = endDateInput.value;
                        assignedTo = assignedToInput.value;
                        newTask = {
                            taskName: taskName,
                            endDate: endDate,
                            assignedTo: assignedTo,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch('http://localhost:3000/tasks', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(newTask),
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.ok) {
                            console.log('Task submitted successfully!');
                        }
                        else {
                            console.error('Task submission failed!');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error:', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Task.reassignTask = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var reassignedToInput, reassignedTo, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reassignedToInput = document.getElementById('reassignedTo');
                        reassignedTo = reassignedToInput.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch("http://localhost:3000/tasks/".concat(id), {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    assignedTo: reassignedTo
                                }),
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.ok) {
                            console.log('Task reassigned successfully!');
                        }
                        else {
                            console.error('Task reassignment failed!');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.error('Error:', error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Task;
}());
function handleFormSubmit(event) {
    event.preventDefault();
    var taskIdInput = document.getElementById('taskId');
    // const taskNameInput = document.getElementById('taskName') as HTMLInputElement;
    // const endDateInput = document.getElementById('endDate') as HTMLInputElement;
    // const assignedToInput = document.getElementById('assignedTo') as HTMLInputElement;
    var taskId = Number(taskIdInput.value);
    // const taskName = taskNameInput.value;
    // const endDate = endDateInput.value;
    // const assignedTo = assignedToInput.value;
    // Reassign the task
    Task.reassignTask(taskId);
}
var submitButton = document.getElementById('submit');
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', Task.addTask);
Task.dsiplayTasks();
