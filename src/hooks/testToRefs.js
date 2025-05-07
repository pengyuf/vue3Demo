import { reactive, toRef, toRefs } from "vue";

export function useToRefs() {
    const stu = reactive({
        age: "20",
        school: "xtu",
    })
    // const { age, school } = toRefs(stu);

    const editAge = () => {
        stu.age++;
    };
    const editSchool = () => {
        stu.school = "editSchool";
    };

    return {
        age: toRef(stu, 'age'),
        school: toRef(stu, 'school'),
        editAge,
        editSchool
    }
}