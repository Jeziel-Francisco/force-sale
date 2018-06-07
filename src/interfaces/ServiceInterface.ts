export interface IService<T> {
    findById?(id: number);
    create(model: T);
    update(id: number, model: T);
    remove(id: number);
}