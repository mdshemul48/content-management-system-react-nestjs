/* eslint-disable @typescript-eslint/no-var-requires */
import { PrismaClient } from '@prisma/client';
import { user, catagories } from './data';

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.user.createMany({
      data: user,
    });
    console.log('User created successfully');

    await prisma.category.createMany({
      data: catagories,
    });
    console.log('Category created successfully');
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

load();
