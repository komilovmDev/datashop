from django.db import models

class Profile(models.Model):
    external_id = models.PositiveIntegerField(
        verbose_name='Foydalanuvchi IDsi'
    )
    name = models.TextField(
        verbose_name='Foydalanuvchi Ishmi'
    )

    def __str__(self):
        return f'#{self.external_id} {self.name}'

    class Meta:
        verbose_name = 'Profil'


class Message(models.Model):

    profile = models.ForeignKey(
        to='tgbot.Profile',
        verbose_name='Profil',
        on_delete=models.PROTECT,
    )

    text = models.TextField(
        verbose_name='Text'
    )

    created_at = models.DateTimeField(
        verbose_name='Vremya poluchenie',
        auto_now_add=True,
    )

    def __str__(self):
        return f'Soobsheniye {self.pk} ot {self.profile}'

    class Meta:
        verbose_name = 'Xabar'
        verbose_name_plural = 'Xabar'

    