from django.db import models

# Create your models here.
class SysUser(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100,unique=True,verbose_name='用户名')
    pwd = models.CharField(max_length=100,verbose_name='密码')
    avatar = models.ImageField(max_length=255,null=True,verbose_name='用户头像')
    email = models.EmailField(max_length=100,null=True,verbose_name='邮箱')
    phonenumber = models.CharField(max_length=11,null=True,verbose_name='联系方式')
    login_data = models.DateTimeField(null=True,verbose_name='最后登录时间')
    status = models.IntegerField(null=True,verbose_name='账号状态(0正常 1停用)')
    create_time = models.DateTimeField(null=True,verbose_name='创建时间')
    update_time = models.DateTimeField(null=True,verbose_name='更新时间')
    remark = models.CharField(max_length=100,null=True,verbose_name='备注')
    class Meta:
        db_table = 'sys_user'
