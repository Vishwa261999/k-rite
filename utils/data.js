import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    MessageSquare,
    MoreHorizontal
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const getCategoryColor = (categoryName) => {
    const category = tagColor.find((tag) => tag.name === categoryName);
    return category ? category.color : "black";
};

const getCategoryBackgroundColor = (categoryName) => {
    const category = tagColor.find((tag) => tag.name === categoryName);
    return category ? category.backgroundColor : "white";
};

export const data = [
    {
        id: "m5gr84i9",
        img: "https://icon-library.com/images/w-icon/w-icon-1.jpg",
        count: 2,
        isChat: true,
        profile: "Wix",
        description: "Develop a personalized fitness pl",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["Automation"],
        tags: ["#DigitalTransformation", "#Digital"],
        nextmeetings: "in 30 minutes",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "#006400"
    },
    {
        id: "3u1reuv4",
        img: "https://cdn-icons-png.flaticon.com/512/2496/2496101.png",
        isChat: false,
        profile: "Shopify",
        description: "Introduce a cloud-based retail solution",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["E-commerce", "B2B"],
        tags: ["#OnlineShopping", "#DigitalShopping"],
        nextmeetings: "Tommorow",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "#1e94bc"
    },
    {
        id: "derv1ws0",
        img: "https://www.reviano.com/wp-content/uploads/2019/11/Mailchimp-logo.jpg",
        isChat: false,
        profile: "MailChimp",
        description: "Develop a personalized fitness platform",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["SAAS", "Mobile"],
        tags: ["#TechInnovation", "#Cloud"],
        nextmeetings: "Tommorow",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "#1e94bc"

    },
    {
        id: "5kma53ae",
        img: "https://newsroom.paypal-corp.com/image/PP_Logo_Yellow.png",
        isChat: true,
        count: 9,
        profile: "PayPal",
        description: "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers; it serves as an electronic alternative to traditional paper methods such as checks and money orders.",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["Marketplace"],
        tags: ["#DailySellOnline", "#OnlineMarketing"],
        nextmeetings: "in 6 hours",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "green"
    },
    {
        id: "bhqecj4p",
        img: "https://i0.wp.com/iaccessibility.net/wp-content/uploads/2019/11/disneyplus-logo-100793691-large.jpg?ssl=1",
        isChat: false,
        profile: "Disney",
        description: "Disney Company, American corporation best known as a purveyor of family entertainment. During the 20th and early 21st centuries, it became one of the world’s largest media conglomerates, with such holdings as ABC, ESPN, Pixar, Marvel Entertainment, and 20th Century Studios. Disney headquarters are in Burbank, California.",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["B2B", "B2C"],
        tags: ["#BusinessPartnerships"],
        nextmeetings: "No contact",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "brown"
    },
    {
        id: "bhqecj4p",
        img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/174_Intercom-1024.png",
        isChat: true,
        count: 9,
        profile: "Intercom",
        description: "An intercom system is a two-way electronic communication device containing circuitry designed for transmitting and receiving audio and/or video transmissions. With the emergence of cellular communication, digital telephone systems, and other new communication devices, there is new intercom technology available to accommodate these changes.",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["Technology", "SAAS"],
        tags: ["#SmartFinance", "#Saas"],
        nextmeetings: "in 1 hour",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "green"
    },
    {
        id: "bhqecj4p",
        img: "https://th.bing.com/th/id/R.c8bf7c087ca9793d094042845707ffac?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0",
        isChat: true,
        count: 5,
        profile: "Google",
        description: "Google LLC ( GOO-ghəl) is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence (AI). It has been referred to as",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["Finance", "Automation"],
        tags: ["#SmartFinance", "#Workcondition"],
        nextmeetings: "in 30 minutes",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "green"
    },
    {
        id: "bhqecj4p",
        img: "https://cdn-icons-png.flaticon.com/512/3488/3488413.png",
        isChat: false,
        profile: "Evernote",
        description: "Evernote is a note-taking and task-management application developed by the Evernote Corporation. It is intended for archiving and creating notes with embedded photos, audio, and saved web content. Notes are stored in virtual and can be tagged, annotated, edited, searched, and exported. Evernote is available online and has clients for Android, iOS, macOS, and Microsoft Windows.",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["Transportation"],
        tags: ["#LogicTech", "#UX"],
        nextmeetings: "Next month",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7",
        backgroundColor: "transparent",
        color: "gray"
    },
    {
        id: "bhqecj4p",
        img: "https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0",
        isChat: true,
        count: 54,
        profile: "Microsoft",
        description: "failed",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["Publishing", "B2C"],
        tags: ["#B2CMarketing", "#RetailIT"],
        nextmeetings: "No contact",
        backgroundColorCategory: "#ffd6ff",
        colorCategory: "#f72585",
        backgroundColor: "rgba(0, 65, 0, 0.1)",
        color: "brown"
    },
    {
        id: "bhqecj4p",
        img: "https://www.svgrepo.com/show/353911/invision-icon.svg",
        isChat: false,
        profile: "Invision",
        description: "failed",
        members: ["https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1709991676~exp=1709992276~hmac=7cedeeb8680b26368affe2845360658e22f8513bc5566b650b673ffb802bb97e", "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709991746~exp=1709992346~hmac=44ba25eac311224948575e7f1ba5d372fc1a9b84ba6fa39f9249be880c1476fa", "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1709991792~exp=1709992392~hmac=800d834f7a3e88b76f9cc18b3c13e76306854f4dff2513782ad7c2edcd2aaf7f", "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w=740&t=st=1709991810~exp=1709992410~hmac=6338e71e1a9c868baf00b3721641c2746352769b033eed92ef294b19cd025f1b", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709991821~exp=1709992421~hmac=e64edf7d9c0ca9157beaf3877da7e7ec564cd008981089fe2450c438ec63e6f0", "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1709991833~exp=1709992433~hmac=d31194a79e5dbe264af05d08c56eae2b948192253346a44ccada4ebf035a24c7"],
        categories: ["Web Services"],
        tags: ["#Introgation"],
        nextmeetings: "Next month",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7",
        backgroundColor: "transparent",
        color: "gray",
        backgroundColorCategory: "#caf0f8",
        colorCategory: "#0096c7"
    },
]

export const tagColor = [
    {
        name: "Automation",
        color: "purple",
        backgroundColor: "#caf0f8"
    },
    {
        name: "E-commerce",
        color: "#582f0e",
        backgroundColor: "#deab90"
    },
    {
        name: "SAAS",
        color: "#3a5a40",
        backgroundColor: "#b7e4c7"
    },
    {
        name: "Marketplace",
        color: "#3a5a40",
        backgroundColor: "#b7e4c7"
    },
    {
        name: "B2B",
        color: "#805b10",
        backgroundColor: "#ffee99"
    },
    {
        name: "Mobile",
        color: "#805b10",
        backgroundColor: "#ffee99"
    },
    {
        name: "Finance",
        color: "#805b10",
        backgroundColor: "#ffee99"
    },
    {
        name: "Transportation",
        color: "#805b10",
        backgroundColor: "#ffee99"
    },
    {
        name: "Web Services",
        color: "#4361ee",
        backgroundColor: "#caf0f8"
    },
    {
        name: "Technology",
        color: "#3a0ca3",
        backgroundColor: "#caf0f8"
    },
    {
        name: "B2C",
        color: "#aacc00",
        backgroundColor: "#fcefb4"
    },
    {
        name: "Publishing",
        color: "#e500a4",
        backgroundColor: "#ff85a1"
    },
]


export const columns = [
    {
        id: "select",
        accessorKey: "brand",
        header: "brand",
        header: ({ table }) => (
            <div className="flex items-center px-4 w-full gap-2">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
                <p>Brand</p>
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center px-4  gap-2 justify-between">
                <div className="flex items-center gap-2 px-0">
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                    />
                    <img
                        style={{ height: "30px", width: "30px", borderRadius: "5px" }}
                        src={row.original.img}
                        alt=""
                    />
                    <span className="ml-2">{row.original.profile}</span>
                </div>
                {
                    row.original.isChat &&
                    <div className="flex gap-2 p-4">
                        <MessageSquare size={20} color="gray" />
                        {row.original.count}
                    </div>
                }
            </div >
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => (
            <div
                className="capitalize "
                style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                    width: "220px"
                }}
            >
                {row.getValue("description")}
            </div>
        ),
    },

    {
        accessorKey: "members",
        header: "Members",
        cell: ({ row }) => (
            <div className="flex items-center p-2">
                {row.original.members.slice(0, 3).map((member, index) => (
                    <Avatar key={index} className="-ml-2">
                        <AvatarImage src={member} alt={member} />
                        <AvatarFallback>{member}</AvatarFallback>
                    </Avatar>
                ))}
                {row.original.members.length > 3 && (
                    <Avatar className="-ml-2">
                        <AvatarFallback>+{row.original.members.length - 3}</AvatarFallback>
                    </Avatar>
                )}
            </div>
        ),
    },
    {
        accessorKey: "categories",
        header: () => <div className="text-start">Categories</div>,
        cell: ({ row }) => (
            <div className="flex items-center p-2 gap-2">
                {row.original.categories.map((category) => (
                    <Badge
                        variant="secondary"
                        style={{
                            color: getCategoryColor(category),
                            backgroundColor: getCategoryBackgroundColor(category),
                        }}
                    >
                        {category}
                    </Badge>
                ))}
            </div>
        ),
    },
    ,
    {
        accessorKey: "tags",
        header: () => <div className="text-start ">Tags</div>,
        cell: ({ row }) => (
            <div className="flex overscroll-x-none" style={{
                textOverflow: "ellipsis",
                WebkitBoxOrient: "horizontal",
                WebkitLineClamp: 2,
            }}>
                {row.original.tags.map((tag) => (
                    <Badge variant="secondary">{tag}</Badge>
                ))}
            </div>
        ),
    },
    {
        accessorKey: "nextmeetings",
        header: () => <div className="text-start w-40">Next Meeting</div>,
        cell: ({ row }) => {
            const nextMeetingstyle = {
                color: row.original.color,
                backgroundColor: row.original.backgroundColor,
            };

            return (
                <Badge
                    style={nextMeetingstyle}
                    className="border border-gray-300 bg-white text-black"
                >
                    {row.original.nextmeetings}
                </Badge>
            );
        },
    },
    // {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({ row }) => {
    //         const payment = row.original;

    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         onClick={() => navigator.clipboard.writeText(payment.id)}
    //                     >
    //                         Copy payment ID
    //                     </DropdownMenuItem>
    //                     <DropdownMenuSeparator />
    //                     <DropdownMenuItem>View customer</DropdownMenuItem>
    //                     <DropdownMenuItem>View payment details</DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         );
    //     },
    // },
];