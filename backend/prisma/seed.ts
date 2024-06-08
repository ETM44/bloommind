import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const hello = await prisma.hello.upsert({
        where: { id: 1 },
        update: {},
        create: {
            hello: 'Hello World ! /0/',
        },
    });

    console.log({ hello });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });